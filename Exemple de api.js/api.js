import axios from 'axios';

   // Créer une instance d'Axios avec une URL de base
   const api = axios.create({
     baseURL: 'http://localhost:3000', // URL de ton backend NestJS
   });

   // Ajouter un intercepteur pour gérer les tokens d'authentification
   api.interceptors.request.use((config) => {
     const token = localStorage.getItem('token'); // Récupérer le token JWT
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   });

   export default api;
   