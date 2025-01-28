import pg from 'pg';
const { Client }= pg;


const config={
    user: 'db_lacasainformatica_162e_user',
    host: 'dpg-cuckp5tds78s73a1mom0-a.oregon-postgres.render.com',
    database: 'db_lacasainformatica_162e',
    password: '4wgpvnOqOzY5V3PQLqR8SHmbbKlDy2k7',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}

export async function ConsultarCursos() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        const resultado= await cliente.query("SELECT * FROM cursos")
        return resultado.rows;
    }
    catch(error){
        console.log(error)
    }
}