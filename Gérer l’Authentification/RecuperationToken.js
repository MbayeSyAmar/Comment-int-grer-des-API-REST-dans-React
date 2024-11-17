const handleLogin = async () => {
  try {
    const response = await api.post('/auth/login', {
      email: 'user@example.com',
      password: 'password123',
    });

    localStorage.setItem('token', response.data.accessToken); // Stocke le token
    alert('Connexion réussie !');
  } catch (error) {
    console.error('Erreur de connexion :', error);
  }
};
