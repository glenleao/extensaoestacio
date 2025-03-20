//importar a dependencia Axios para conectar com a Api
import axios from "axios";

//Criar a instancia de conexao HTTP
export const api = axios.create({
    baseURL: "https://mabekos.glenleao.com.br/apimabekos.php"
});

//Exportar a instancia configurada do Axios
// export default api;