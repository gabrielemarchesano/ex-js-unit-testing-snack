const { 
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById
} = require("./snacks");

describe("Manipolazione di stringhe", () => {
  // Snack 1
  test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => { 
    expect(getInitials("Mario Rossi")).toBe("MR");
  });

  // Snack 2
  test('La funzione "createSlug" restituisce una stringa in lowercase', () => { 
    expect(createSlug("JAVAsCript")).toBe("javascript");
    expect(createSlug("JAVAsCript è complesso")).toBe("javascript-è-complesso");
  });
  
  // Snack 4
  test('La funzione "createSlug" sostituisce gli spazi con "-"', () => { 
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
  });

  // Snack 5
  test('La funzione "isPalindrome" verifica se una stringa è un palindromo', () => { 
    expect(isPalindrome("anna")).toBeTruthy();
  });

  // Snack 6
  test('La funzione "createSlug" lancia errore se il titolo è vuoto o non valido', () => { 
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug(null)).toThrow();
  })
});

describe("Manipolazione di array", () => {
  // Snack 3
  test('La funzione "average" calcola la media aritmetica di un array di numeri', () => { 
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
  
  // Snack 7
  const posts = [
    { id: 1, title: "Post 1", slug: "post-1" },
    { id: 2, title: "Post 2", slug: "post-2" },
    { id: 3, title: "Post 3", slug: "post-3" }
  ];
  
  test('La funzione "findPostById" restituisce il post corretto dato l\'array di post e l\'id', () => { 
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Post 1", slug: "post-1" });
  });
});

