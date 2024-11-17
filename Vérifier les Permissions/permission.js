const isAuthenticated = !!localStorage.getItem('token');

   return (
     <div>
       {isAuthenticated ? (
         <p>Bienvenue, utilisateur connecté !</p>
       ) : (
         <p>Veuillez vous connecter pour accéder à cette fonctionnalité.</p>
       )}
     </div>
   );
   