const URL_ROOT = 'https://cmmecatronica.herokuapp.com'
const URL_ROOT_AUTH = 'http://localhost:8000'
const URL_SERVICIOS = {
    usuarios: URL_ROOT+'/usuarios/',
    //login : URL_ROOT +'auth/',
    registrar: URL_ROOT+'/registrarUsuario/',
    registrarSU: URL_ROOT+'/registrarSuperUsuario/',
    consultarUserById:URL_ROOT+'/registrarUsuario/?id=',
    login: URL_ROOT_AUTH + '/api-token-auth/',
    refreshlogin: URL_ROOT_AUTH +'/api-token-refresh/',
    proyectos: URL_ROOT + '/proyectos/',
    eventos: URL_ROOT + '/eventos/',
    loadImgFile: URL_ROOT + 'loadImgService',
    materiales: URL_ROOT + '/materiales/',
    prestamoMateriales: URL_ROOT + '/prestamoMateriales/',
    premios: URL_ROOT + '/premios/',
    obtenerPremios: URL_ROOT + '/obtenerPremios/',
}
export default URL_SERVICIOS