import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// Obtener todos los contactos
const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

// Crear un nuevo contacto
const create = newPerson => {
  return axios.post(baseUrl, newPerson).then(response => response.data);
};

// Eliminar un contacto
const remove = id => {
  return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
};

// Actualizar un contacto existente
const update = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data);
};

export default { getAll, create, remove, update };

