//Agrega libreria "mongoose"
const mongoose = require('mongoose');

//Realiza conexión a base de datos MongoDB.
mongoose.connect('mongodb://localhost/mongodb_empresa', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("conexión Exitosa a MongoDB!"))
.catch((e)=> console.log("Error de conexión: " + e));

//Procedimiento que replica el esquema del servicio "Empleados"
const empleadoSchema = mongoose.Schema({
	nombre:String,
	nacimiento:String,
	descripcion:String
});

//Método que clona el servicio "Empleados" en el esquema creado.
const EmpleadoModel = mongoose.model('empleados', empleadoSchema);

//Función para mostrar todos los registros del servicio "Empleados"
const show_query = async ()=>{
	const mostrar_empleados = await EmpleadoModel.find();
	console.log(mostrar_empleados);
}

//Función para ingresar un registro al servicio "Empleados"
const create_query = async ()=>{
	const empleado = new EmpleadoModel({
		nombre: 'Marcos Hernandez',
		nacimiento: '1990-04-12',
		descripcion: 'N/A'
	})

	const resultado = await empleado.save();
}

//Función para actualizar un registro del servicio "Empleados"
const update_query = async (id)=>{
	const empleado = await EmpleadoModel.updateOne({_id:id},
	{
		$set:{
			nombre: 'Alberto Cortes Peréz',
			nacimiento: '1980-03-01',
			descripcion: 'N/A'
		}	
	})
}

//Función para eliminar un registro del servicio "Empleados"
const delete_query = async (id)=>{
	const empleado = await EmpleadoModel.deleteOne({_id:id});
}

show_query();