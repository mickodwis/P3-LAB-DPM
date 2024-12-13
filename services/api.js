export const fetchBooks = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', title: 'React Native for Beginners', cover: 'https://via.placeholder.com/100' },
          { id: '2', title: 'Learning JavaScript', cover: 'https://via.placeholder.com/100' },
          { id: '3', title: 'Mastering Redux', cover: 'https://via.placeholder.com/100' },
        ]);
      }, 2000);
    });
  };
  