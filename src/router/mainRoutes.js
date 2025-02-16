const MainRoutes = {
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'alunos',
            path: '/alunos',
            component: () => import('../pages/alunos/index.vue')
        },
        {
            name: 'alunos-show',
            path: '/alunos/show/:id',
            props:true,
            component: () => import('../pages/alunos/show.vue')
        },

        {
            name: 'professores',
            path: '/professores',
            component: () => import('../pages/professores/index.vue')
        },
        {
            name: 'materias',
            path: '/materias',
            component: () => import('../pages/materias/index.vue')
        },
        {
            name: 'turmas',
            path: '/turmas',
            component: () => import('../pages/turmas/index.vue')
        },
        {
            name: 'provas',
            path: '/provas',
            component: () => import('../pages/provas/index.vue')
        },
        {
            name: 'nota-prova',
            path: '/nota-prova',
            component: () => import('../pages/nota-prova/index.vue')
        },
        {
            name: 'nota-aluno',
            path: '/nota-aluno',
            component: () => import('../pages/nota-aluno/index.vue')
        },
       
    ]
};

export default MainRoutes;
