const username = 'SmatamorosN04';
const content = document.getElementById('galleryInfo')
async function fetchRepo(){
  
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos;
  
}

/*   fetchRepo().then(repos => {
  repos.forEach(repo => {
      console.log(
      'Nombres', repo.name,
       'descripcion', repo.description, 
      'lenguajes', repo.language,
      'fecha de creacion', repo.created_at);
  });
})  */ 
 
 (async () => {
  try{ 
    const repos = await fetchRepo();
  let cards = `${repos.map(repo =>`
    <article class="galery-cards">
          <img src="/assets/img/code-1076536_1280.jpg" alt="galery mimage" >
            <h3>${repo.name}</h3>
          <p> ${repo.description} </p>
            <div class="tecnologies--container">
              <span class="html-card">${repo.language}</span>
                </div> 
            </article>`
).join('')}
  `;
  content.innerHTML = cards;
}catch(error){
  console.log(error);
}

})();  