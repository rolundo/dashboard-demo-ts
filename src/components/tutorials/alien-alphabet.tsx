import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function AlienAlphabetTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            First we create a hash map that will store unique letters. This map
            will be used to create an adjancency list where each letter (vertex)
            will store vertices (edges) that it points to:
          </Typography>
          <Highlighter
            codeString={`
            const adjacencyList = {}

            for (const word of words) {
              for (const letter of word) {
                adjacencyList[letter] = {}
              }
            }
          `}
          />
          <Typography paragraph>
            To create the adjacency list, we will compare each letter of a word
            to the corresponding letter of the following word. If a mismatch is
            found, we will add the letter of the next word (words[i+1]) as an
            edge to the letter of the current word (words[i]). As soon as the
            first mismatch is found, we will move to the next word.
          </Typography>
          <Typography paragraph>
            {`Example: ['bac', 'bcb']. Since the 2nd letters of the two words are a mismatch, 
            we store 'a' as pointing to 'c' in the adjacency list => a: { c: true }`}
          </Typography>
          <Highlighter
            codeString={`
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
          `}
          />
          <Typography paragraph>
            After creating the adjacency list and before topologically sorting
            it, we first check to see if we have two vertices pointing at each
            other. If true, that means we have a list of words that is not
            correctly sorted:
          </Typography>
          <Highlighter
            codeString={`
              if (dataInvalid(adjacencyList)) {
                throw new Error('The list of words is incorrectly sorted!')
              }

              const dataInvalid = (adjacencyList) => {
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
            `}
          />

          <Typography paragraph>
            After checking for invalid data, we call our topological sort
            function. This function will create an empty array to hold the
            sorted list and a hash map for vertices that have been visited. For
            each unvisited vertex, we will call a depth-first search function
            which will use recursion to build an array of reverse-sorted
            letters:
          </Typography>
          <Highlighter
            codeString={`
              const order = topologicalSort(adjacencyList)

              const topologicalSort = (adjacencyList) => {
                // This array will be used to store the letters in reverse alphabetical order
                let sortedLetters = []
                // This object will store the currently visited vertices
                // This is necessary to escape the recursive depth-first search function
                let visited = {}
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
            `}
          />
          <Typography paragraph>
            This depth-first search function will explore as far as possible
            from the current vertex. Recursion will be used to travel to
            connected vertices and to vertices connected to those vertices (and
            so on...). When it reaches a dead end, the current vertex will be
            added to the sortedLetters array. When all vertices have been
            explored and added, the recursion ends and you are left with a
            reverse sorted list:
          </Typography>
          <Highlighter
            codeString={`
              const dfs = (adjacencyList, vertex, visited, sortedLetters) => {
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
            `}
          />
          <Typography paragraph>
            After receiving an array of sorted letters, we will use this array
            to check the check the adjacency list for exactly one possible path.
            For a single path to exist, every vertex must connect to the next
            vertex. If there is more than one possible path through the
            adjacency list, then that means the user has not provided enough
            data to determine the alphabetical order of the given letters:
          </Typography>
          <Highlighter
            codeString={`
              if (!singlePath(adjacencyList, order)) {
                throw new Error(
                  'More than one path found, not enough data provided to determine alphabetical sort.'
                )
              }

              const singlePath = (adjacencyList, order) => {
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
            `}
          />
          <Typography paragraph>
            If only one path is detected, we can return the array of sorted
            letters:
          </Typography>
          <Highlighter codeString='return order' />
        </Grid>
      </Grid>
    </Container>
  )
}
