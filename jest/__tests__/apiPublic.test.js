const request = require('supertest');

describe('Testes de API Pública do GitHub', () => {
  it('deve obter uma lista de emojis', async () => {
    console.log('Teste: Obtendo uma lista de emojis...');
    const response = await request('https://api.github.com')
      .get('/emojis')
      .set('User-Agent', 'MyApp') 
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Object);
    expect(Object.keys(response.body).length).toBeGreaterThan(0);
  });

  it('deve obter uma lista de repositórios públicos para um usuário', async () => {
    console.log('Teste: Obtendo uma lista de repositórios públicos para um usuário...');
    const username = 'octocat'; 
    const response = await request('https://api.github.com')
      .get(`/users/${username}/repos`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.every(repo => repo.private === false)).toBe(true);
  });

  it('deve obter uma lista de gists públicos', async () => {
    console.log('Teste: Obtendo uma lista de gists públicos...');
    const response = await request('https://api.github.com')
      .get('/gists/public')
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('deve buscar usuários', async () => {
    console.log('Teste: Buscando usuários...');
    const query = 'github'; 
    const response = await request('https://api.github.com')
      .get(`/search/users?q=${query}`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toBeInstanceOf(Array);
  });

  it('deve buscar repositórios', async () => {
    console.log('Teste: Buscando repositórios...');
    const query = 'jest'; 
    const response = await request('https://api.github.com')
      .get(`/search/repositories?q=${query}`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toBeInstanceOf(Array);
  });

  it('deve buscar tópicos', async () => {
    console.log('Teste: Buscando tópicos...');
    const query = 'javascript'; 
    const response = await request('https://api.github.com')
      .get(`/search/topics?q=${query}`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Object);
  });
   
  it('deve obter uma lista de eventos', async () => {
    console.log('Teste: Obtendo uma lista de eventos...');
    const response = await request('https://api.github.com')
      .get('/events')
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('deve obter uma lista de feeds', async () => {
    console.log('Teste: Obtendo uma lista de feeds...');
    const response = await request('https://api.github.com')
      .get('/feeds')
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('deve obter uma lista de seguidores para um usuário', async () => {
    console.log('Teste: Obtendo uma lista de seguidores para um usuário...');
    const username = 'octocat'; 
    const response = await request('https://api.github.com')
      .get(`/users/${username}/followers`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('deve obter uma lista de usuários seguidos por um usuário', async () => {
    console.log('Teste: Obtendo uma lista de usuários seguidos por um usuário...');
    const username = 'octocat'; 
    const response = await request('https://api.github.com')
      .get(`/users/${username}/following`)
      .set('User-Agent', 'MyApp')
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('deve obter uma lista de gists para um usuário', async () => {
    console.log('Teste: Obtendo uma lista de gists para um usuário...');
    const username = 'octocat'; 
    const response = await request('https://api.github.com')
      .get(`/users/${username}/gists`)
      .set('User-Agent', 'MyApp') 
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });
   
  it('deve obter uma lista de issues para um repositório', async () => {
    console.log('Teste: Obtendo uma lista de issues para um repositório...');
    const owner = 'octocat'; 
    const repo = 'Hello-World'; 
    const response = await request('https://api.github.com')
      .get(`/repos/${owner}/${repo}/issues`)
      .set('User-Agent', 'MyApp') 
      .expect(200);

    console.log('Resposta:', response.body);
    expect(response.body).toBeInstanceOf(Array);
  });

});
