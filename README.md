# Carvajal contact app

Hola, mi nombre es Juan Felipe Tamayo, de antemano estoy muy agradecido por esta gran oportunidad de postular a esta gran empresa, espero les guste el resultado de la prueba.

estos son los links de los repositorios:
**Frontend:** [felipeth04/carvajal_test_front: Carvajal contact app UI para prueba técnica (github.com)](https://github.com/felipeth04/carvajal_test_front)
**Backend:** [felipeth04/carvajal_test_back: Backend Carvajal contact app para prueba técnica (github.com)](https://github.com/felipeth04/carvajal_test_back)

## Esta aplicación está corriendo actualmente en producción, esta es la información:

#### Por ahora el backend no esta en producción, esto afecta al frontend y a la base de datos las cuales ya estan disponibles en los links de la parte de abajo, se debe entonces correr en local el backend para el correcto funcionamiento.

**Backend:** Estoy intentando desplegar el backend en paginas
gratuitas, pero aun no encuentro alguna, **por ahora se debe correr en local el backend**

**Base de datos:** Está corriendo en Railway

**Frontend:** Está desplegado en vercel, este es el link 
<a target="_blank">www.carvajal-test-front.app<a/> 


# Instalación manual

Si desea correr el código en la maquina local debe seguir los siguientes pasos:

## Base de datos
- Debe crear la base de datos de manera manual en MySQL con los siguientes comandos. (**Este paso es vital, ya que sin este el backend generara errores al no encontrar la base de datos**)

```bash
create database contact_app;  
use contact_app;
```
- adicional debe crear un archivo .env con las siguientes variables de entorno:

HOST_DB=
PORT_DB=
USER_DB=
PASS_DB=
NAME_DB=contact_app

esto es necesario para el correcto despliegue en local.

## Backend
- una vez hecho esto deberá clonar el **backend** de la aplicación corriendo el siguiente comando:
```bash
git clone https://github.com/felipeth04/carvajal_test_back.git
```
- debe instalar todas las dependencias con el siguiente comando:
```bash
npm install
```
- Ahora deberá correr el comando para desplegar el servidor de desarrollo:
```bash
npm run start:dev
```
## Frontend
- una vez hecho esto deberá clonar el **frontend** de la aplicación corriendo el siguiente comando:
```bash
git clone https://github.com/felipeth04/carvajal_test_front.git
```
- debe instalar todas las dependencias con el siguiente comando:
```bash
npm install
```
- Ahora deberá correr el comando para desplegar el servidor de desarrollo:
```bash
npm run dev
```