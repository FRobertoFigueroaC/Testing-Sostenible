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

describe( 'Disease filter', () => {
    
    it( 'filters cases when several diagnosis filters are applied together', () => {
        const searchCriteria1 = 'Vías respiratorias altas';
        const searchCriteria2 = 'Cerebro';
        const expectedName1 = 'Chupito';
        const expectedName2 = 'Juliana';

        const cases:Case[] = [
            createCase( 1, expectedName1 ),
            createCase( 2, expectedName2 ),
            createCase( 3, 'Irrelevant-Name' ),
        ];
        const diagnoses:Diagnosis[] = [
            createDiagnosis( 1, searchCriteria1 ),
            createDiagnosis( 2, searchCriteria2 ),
            createDiagnosis( 3, 'Irrelevant-location' )
        ];
        const diseaseFilter = DiseaseFilter.create( cases, diagnoses );
        diseaseFilter.addFilter( searchCriteria2 );
        diseaseFilter.addFilter( searchCriteria1 );

        const result = diseaseFilter.casesFiltered;

        expect( result.length ).toBe( 2 );
        expect( result[ 1 ].patientName ).toBe( expectedName1 );
        expect( result[ 0 ].patientName ).toBe( expectedName2 );
    } );
} );