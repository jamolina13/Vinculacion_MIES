export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case '[Auth] LogInState':
            return{
                id: action.payload.id,
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                cedula: action.payload.cedula,
                telefono: action.payload.telefono,
                correo: action.payload.correo,
                direccion: action.payload.direccion,
                isLogin: action.payload.isLogin,
                rol: action.payload.rol
            }

        case '[Auth] LogOutState':
            return{
                isLogin: action.payload.isLogin
            }
            
        default:
            return state;
    }

};