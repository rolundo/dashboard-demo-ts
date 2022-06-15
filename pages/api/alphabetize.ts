type AdjacencyList = {
  [key: string]: Vertice
}

type Vertice = {
  [key: string]: boolean
}

// This function will accept an array of words sorted in alphabetical order
// It will determine the order of the alphabet by first creating an adjacency list
// This adjacency list will then be topologically sorted using depth-first search
// The output will be an array of letters in alphabetical order
export const alphabetize = (words: string[]) => {
  // Check to see if the data is valid
  if (!words || words.length < 2) {
    throw new Error('Not enough words provided!')
  }

  /* First we create an object to store unique letters. 
     This object will then be used to create an adjacency list where each 
     letter (vertex) will store vertices (edges) that it points to 
  */
  const adjacencyList: AdjacencyList = {}

  // Map through each letter of each word and add it as a key to adjacencyList
  // The value for each key will be an empty object to store vertices it points to
  for (const word of words) {
    for (const letter of word) {
      adjacencyList[letter] = {}
    }
  }

  /* 
    To create the adjacency list, we will compare each letter of a word to the 		 
    corresponding letter of the following word. If a mismatch is found, we 
    will add the letter of the next word (words[i+1]) as an edge to the letter 
    of the current word (words[i]). As soon as the first mismatch is found, 
    we will move to the next word.
    
    Example: ['bac', 'bcb']. Since the 2nd letters of the two words are a mismatch, 
    we store 'a' as pointing to 'c' in the adjacency list => a: { c: true }
 */
  // Loop through each word except for the last word in the array
  for (let i = 0; i < words.length - 1; i++) {
    // This will be used to check if a mismatch has been found between the current word and the next word
    let mismatchFound = false

    // Loop through each letter of the current word
    for (let j = 0; j < words[i].length; j++) {
      // Grab the letter for the current index of the current word
      const currentWordLetter = words[i][j]
      // Grab the letter for the same index of the next word
      const nextWordLetter = words[i + 1][j]

      /* 
        For the current index, if no letter exists for one of the two words, 
        there is nothing to compare, move on to the next word 
      */
      if (!currentWordLetter || !nextWordLetter) {
        break
      }

      // If there is a mismatch between the two letters
      if (currentWordLetter !== nextWordLetter) {
        // Mismatch has been found, set the flag
        mismatchFound = true

        // Add the next-word letter as a neighbor vertex to the current-word letter
        adjacencyList[currentWordLetter][nextWordLetter] = true

        // As soon as a mismatch is found, move on to the next word
        break
      }
    }

    /* If no mismatch has been found && word[i] has a greater length than word[i+1],
       we have data that is not correctly sorted */
    if (!mismatchFound && words[i].length > words[i + 1].length) {
      throw new Error('The list of words is incorrectly sorted!')
    }
  }

  // Check to see if the input is invalid
  // The input is invalid if we have two vertices pointing at each other
  if (dataInvalid(adjacencyList)) {
    throw new Error('The list of words is incorrectly sorted!')
  }

  // Sort the adjacency list to find the alphabetical order
  const order = topologicalSort(adjacencyList)

  // Check the topological sort for more than one path
  // If more than one path exists, we cannot determine the alphabetical order
  if (!singlePath(adjacencyList, order)) {
    throw new Error(
      'More than one path found, not enough data provided to determine alphabetical sort.'
    )
  }

  return order
}

const dataInvalid = (adjacencyList: AdjacencyList) => {
  let invalid = false

  // For each vertex in the list, we will loop through its edges
  Object.keys(adjacencyList).map((node) => {
    // For each of the vertex's edges, we will check its edges to see if it contains the current vertex
    Object.keys(adjacencyList[node]).map((edge) => {
      // If one of the current vertex's edges contains the current vertex,
      // then we have two vertices pointing at each other which means the data is invalid
      if (adjacencyList[edge][node]) {
        invalid = true
      }
    })
  })

  return invalid
}

// Checks the result of the topological sort for a single possible path
// If there is  more than one path, then we cannot determine the alphabetical order
// For a single path to exist, every vertex must connect to the next vertex
const singlePath = (adjacencyList: AdjacencyList, order: string[]) => {
  let singlePath = true

  // We loop through each vertex to check for the existence of the next vertex
  // We use order.length-1 to prevent comparison for the final vertex
  for (let i = 0; i < order.length - 1; i++) {
    const currentVertex = order[i]
    const nextVertex = order[i + 1]

    // If the next vertex does not exist as an edge for the current vertex,
    // more than one path is possible
    if (!adjacencyList[currentVertex][nextVertex]) {
      singlePath = false
    }
  }

  return singlePath
}

// This depth-first search function will explore as far as possible from the current vertex
// Recursion will be used to travel to connected vertices and to vertices connected to those vertices (and so on...)
// When it reaches a dead end, the current vertex will be added to the sortedLetters array
// When all vertices have been explored and added, the recursion ends and you are left with a reverse sorted list
const dfs = (
  adjacencyList: AdjacencyList,
  vertex: string,
  visited: Vertice,
  sortedLetters: string[]
) => {
  // Sets the current vertex as visited
  // This is necessary to prevent infinite recursion
  visited[vertex] = true

  // For each edge of the current vertex
  Object.keys(adjacencyList[vertex]).forEach((edge) => {
    // If the edge has not been visited, call the dfs function again with the edge as the vertex
    if (!visited[edge]) {
      dfs(adjacencyList, edge, visited, sortedLetters)
    }
  })

  // When there are no more vertices to jump to, add the current vertex to the sortedLetters array
  sortedLetters.push(vertex)
}

const topologicalSort = (adjacencyList: AdjacencyList) => {
  // This array will be used to store the letters in reverse alphabetical order
  let sortedLetters: string[] = []
  // This object will store the currently visited vertices
  // This is necessary to escape the recursive depth-first search function
  let visited: Vertice = {}
  // Grab the keys from the adjacency list
  let vertices = Object.keys(adjacencyList)

  // For each unvisited vertex, we will call the depth-first search function
  // The depth-first search function will use recursion to build the sortedLetters array
  vertices.forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(adjacencyList, vertex, visited, sortedLetters)
    }
  })

  // The letters are added reverse alphabetically, so we need to reverse the array
  return sortedLetters.reverse()
}
