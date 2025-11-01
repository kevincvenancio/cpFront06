document.addEventListener('DOMContentLoaded', function () {
    const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
    const bookList = document.getElementById('book-list');
    const loading = document.getElementById('loading');
  
    fetch(booksEndpoint)
      .then(response => response.json())
      .then(books => {
        
        if (loading) {
          loading.style.display = 'none';
        }
        books.forEach((book, index) => {
          const bookElement = document.createElement('div');
          bookElement.classList.add('book-card');
          
          
          const delay = index * 100;
          bookElement.style.animationDelay = `${delay}ms`;
          
          bookElement.innerHTML = `
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group animate-slide-up">
              
              <div class="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 p-4">
                <div class="relative z-10 flex justify-center items-center h-64">
                  <img 
                    src="${book.imagem}" 
                    alt="${book.titulo}" 
                    class="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 shadow-2xl rounded-lg"
                    loading="lazy"
                  >
                </div>
                
                <div class="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl md:text-2xl font-bold text-yellow-700 mb-4 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                  ${book.titulo}
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed flex-grow line-clamp-4">
                  ${book.resumo}
                </p>
                
                
                <button class="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Ver Detalhes
                </button>
              </div>
              
              
              <div class="absolute top-0 right-0 w-20 h-20 bg-yellow-300/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          `;
          
          bookList.appendChild(bookElement);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os livros:', error);
        
        if (loading) {
          loading.style.display = 'none';
        }
        bookList.innerHTML = `
          <div class="col-span-full text-center py-12">
            <div class="bg-red-100 border-2 border-red-400 rounded-2xl p-8 inline-block">
              <p class="text-red-700 text-xl font-semibold">Erro ao carregar os livros. Por favor, tente novamente mais tarde.</p>
            </div>
          </div>
        `;
      });
  });  