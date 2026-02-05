import jwt from "jsonwebtoken";

//Funçao middleware para proteger rotas

export function autenticarToken(req, res, next){
    //Pegar o header authorization (formato esperado: "Bearer <tokem>")
    const autHeader = req.headers["authorization"];
    //Extrair o token do header (remover o "Bearer")
    const token = autHeader && autHeader.split(" ")[1];
    //Se não houver token, retorna erro 401 (não autorizado)

    //Tenta pegar do cokie: token  

    if(!token){
        res.satus(401).json({msg: "Acesso negado - token não fornecido"});
        return;
    }
    try{
        //Verificar se o token é válido
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        //adiciona os dados do usuário à requisição
        req.usuario = usuario;
        //continua para a próxima função da rota
        next();
    } catch (error) {
        //Se o token for inválido ou está expirado, retorna erro 03(proibido)
        res.status(403).json({msg: "Acesso proibido - token invalido"});
    }
}