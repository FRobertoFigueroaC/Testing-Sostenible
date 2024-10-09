import { Case, Diagnosis, DiseaseFilter } from '../core/diseaseFilter';

function createDiagnosis(id:number, location:string): Diagnosis{
    return {
        id: id,
        name: 'irrelevant-name',
        location: location,
        system: 'irrelevant-system',
        origin: 'irrelevant-origin',
        specie: 'irrelevant-specie',
    };
}
function createCase( diagnosisId: number, patientName: string ): Case{
    return {
        id: 1,
        patientName: patientName,
        diagnosisId: diagnosisId,
        diagnosisName: 'irrelevant-diagnosisName',
        publicNotes: [ { id: 1, content: 'public' } ],
        privateNotes: [ { id: 2, content: 'private' } ],
    };
}

function casesWithDiagnoses(){
    let diagnosisId = 0;
    let diagnoses: Diagnosis[] = [];
    let cases: Case[] = [];

    const add = (location:string, patientName:string) => {
        diagnosisId++;
        diagnoses.push(createDiagnosis(diagnosisId, location))
        cases.push(createCase(diagnosisId, patientName))
    };

    const builder = {
        havingDiagnosisWithLocationAndCaseWithName: (location:string, patientName:string) => {
            add(location, patientName);
            return builder
        },
        build: () => ({
            cases: () => cases,
            diagnoses: () => diagnoses,
        })
    };
    return builder;
}

describe( 'Disease filter', () => {
    
    it( 'filters cases when several diagnosis filters are applied together', () => {
        const searchCriteria1 = 'Vías respiratorias altas';
        const searchCriteria2 = 'Cerebro';
        const expectedName1 = 'Chupito';
        const expectedName2 = 'Juliana';

        const fixtures = casesWithDiagnoses()
            .havingDiagnosisWithLocationAndCaseWithName( searchCriteria1, expectedName1 )
            .havingDiagnosisWithLocationAndCaseWithName( searchCriteria2, expectedName2 )
            .havingDiagnosisWithLocationAndCaseWithName( 'Irrelevant-location', 'Irrelevant-name' )
            .build();
        const diseaseFilter = DiseaseFilter.create( fixtures.cases(), fixtures.diagnoses() );
        diseaseFilter.addFilter( searchCriteria2 );
        diseaseFilter.addFilter( searchCriteria1 );

        const result = diseaseFilter.casesFiltered;

        expect( result.length ).toBe( 2 );
        expect( result[ 1 ].patientName ).toBe( expectedName1 );
        expect( result[ 0 ].patientName ).toBe( expectedName2 );
    } );
} );