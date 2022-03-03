# fibonacci-app

By Andrew Richter

[andrewrichter22@gmail.com](mailto:andrewrichter22@gmail.com)

[www.andrewtrichter.com](https://www.andrewtrichter.com/)

[www.linkedin.com/in/andrewtrichter](https://www.linkedin.com/in/andrewtrichter/)

## Instructions

1. Navigate to [repo](https://github.com/atrichter/fibonacci-app)
2. Clone locally using
   `git clone https://github.com/atrichter/fibonacci-app.git`
3. Set GOPATH in fib-server (on mac: `export GOPATH=~/6DegreesHealth/fib-server/`)
4. In `fib-server`, start server with `go run main.go`
5. In `fib-client`, install dependencies using `npm install` or `yarn install`
6. In `fib-client`, start using `npm start` or `yarn start`
7. Navigate to app in [browser](http://localhost:3000)


## Discussion

This application was originally created for a coding challenge during the interview process for a Junior Software Developer position at 6 Degrees Health. This was created shortly after graduating college with only a summer internship's experience in React, and no experience in Golang. The original submissions can be found in the `originalSubmission` branch, and as you can imagine, it was pretty rough. But believe it or not, this helped me get the job.

A year and a half and a promotion later, I revisited the application to update it with some of the technologies and coding standards I learned from my time at 6 Degrees (which are honestly a little overkill for such a simple app). This included using TypeScript and Redux, using go.mod instead of cloning repos into my app, and better file structure in general. There's still plenty of improvements to be made, but it was fun to take another look at it.

The app takes in only positive integers and accurately (until a Go int64 overflow) displays the Fibonacci Sequence up to the entered number of digits. It has a time complexity of O(n) and a space complexity of O(1).


## TODO

- Improve Go tests to adequately test the Fibonacci function
- Write Jest tests
- Improve UI
