// ¿Que es mongoDB? 
// Es una base de datos NoSQL en otras palabras es una base de datos de 
// no relacional, almacena documentos o sea tipos de datos en formato JSON (JavaScript Object Notatio)
// llamados en mongo BSON (Binary json)

// ¿Que tipos de datos de datos recibe la estrura BSON?

// Recibe:
// 1. strings
// 2. enteros de 32 o 62 bits
// 3. tipo de dato real de 64 bits IEEE 754
// 4. Array de bytes (datos binarios)
// 5. Boleanos
// 6. null
// 7. objetos anidados BSON
// 8. Array BSON
// 9. Expresiones regulares


// En mongo para movernos de base de datos usamos la palabra reservada use 
// ejemplo 
// use articulos
// use prodctos
// y asi de esta forma me voy moviendo de bsae de dato

// Referencias: Esta estrategia se utiliza para modelar relaciones entre entidades. En el caso de tu ejemplo, el uso de referencias implica almacenar el ObjectId del usuario creador en la lista de reproducción. Esto permite acceder al usuario a través de la referencia al ObjectId. Este enfoque es útil cuando:

// Tienes grandes cantidades de datos.
// Los datos de usuarios y listas de reproducción se actualizan frecuentemente.
// No necesitas recuperar la información del usuario cada vez que accedes a una lista de reproducción.
// Incrustación: Este enfoque implica almacenar toda la información del usuario directamente dentro de la lista de reproducción. Esto puede ser adecuado si:

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Referencia al esquema de usuario
    },
    comments: [{
      text: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Referencia al esquema de usuario
      },
      date: { type: Date, default: Date.now }
    }]
  });
  
// Las listas de reproducción son pequeñas y no se espera que crezcan significativamente.
// La información del usuario no se actualiza con frecuencia.
// Necesitas acceso rápido a la información del usuario al acceder a la lista de reproducción sin realizar consultas adicionales.
// En MongoDB, estas estrategias son válidas y se eligen en función de las necesidades específicas de tu aplicación. Es importante evaluar factores como la escalabilidad, la frecuencia de actualización y la eficiencia en el acceso a los datos al decidir entre referencias o incrustación.