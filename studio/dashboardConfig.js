export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e59079013ebdf7238aaed56',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog44-studio',
                  apiId: 'b32b95cd-9331-44f4-a841-766e83801b14'
                },
                {
                  buildHookId: '5e590790164f786e37b9ed9d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog44',
                  apiId: 'b9e8ef8f-e52d-47ef-ac27-b92da9c15c86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-sapper-blog44',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog44.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
