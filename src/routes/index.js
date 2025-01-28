import { Router } from "express"
import { ConsultarCursos } from "../public/services/conexion.js"

const router= Router()

router.get('/',(req,res)=> res.render('index',{title: 'La Casa Informática' } ))



router.get('/catalogoCursos',(req,res)=> res.render('catalogoCursos',{title: 'Catálogo' }))
router.get('/promociones',(req,res)=> res.render('promociones',{title: 'Promociones' }))
router.get('/Servicios',(req,res)=> res.render('Servicios',{title: 'Servicios' }))
router.get('/Productos',(req,res)=> res.render('Productos',{title: 'Productos' }))
router.get('/informacionPython',(req,res)=> res.render('informacionPython',{title: 'Python' }))
router.get('/informacionJava',(req,res)=> res.render('informacionJava',{title: 'Java' }))
router.get('/informacionJavascript',(req,res)=> res.render('informacionJavascript',{title: 'Javascript' }))
router.get('/informacionReact',(req,res)=> res.render('informacionReact',{title: 'React' }))
router.get('/informacionMovil',(req,res)=> res.render('informacionMovil',{title: 'Movil' }))
router.get('/bot',(req,res)=> res.render('bot',{title: 'Bot' }))

router.get('/api/get-cursos', async (req,res)=>{
    const cursos= await ConsultarCursos()
    res.status(200).json(cursos)
})
export default router