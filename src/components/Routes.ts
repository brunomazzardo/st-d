const NonAuthRoutes = {
    login: "/login",
    default: "/",
    passwordRecovery: "/recuperar-senha"
};

const AuthRoutes = {
    courses: "/cursos",
    addCourses:"/cursos/adicionar",
    class: "/turmas",
    employees: "/funcionarios",
    classCentral: "/turmas/central"
};

export {
    NonAuthRoutes, AuthRoutes
}