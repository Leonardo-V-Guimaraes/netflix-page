{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}

const API_KEY = 'de436b2aff7fc4cf23a9a96fcb6b1cd8' ;
const API_BASE = 'https://api.themoviedb.org/3' ;


/*
- originais da netflix
- recomendados (trending)
- em alta ( top rated)
- ação
- terror
- romance
- comedia
- documentátios
*/

const basicFetch = async (endpoint) => {
    const req = awai fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch('/discover/tv?with_network=213language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch('/trending/all/week?language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'Top Rated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            },
        ];
    }
}