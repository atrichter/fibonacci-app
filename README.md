# 6 Degrees Health Coding Challenge

By Andrew Richter

[andrewrichter22@gmail.com](mailto:andrewrichter22@gmail.com)

[www.andrewtrichter.com](https://www.andrewtrichter.com/)

[www.linkedin.com/in/andrewtrichter](https://www.linkedin.com/in/andrewtrichter/)

## Instructions

1. Navigate to [repo](https://github.com/atrichter/6DegreesHealth)
2. Clone locally using
   `git clone https://github.com/atrichter/6DegreesHealth.git`
3. Set GOPATH in fib-server (on mac: `export GOPATH=~/6DegreesHealth/fib-server/`
4. In `fib-server/src`, start server with `go run main.go`
5. In `fib-client`, install dependencies using `npm install`
6. In `fib-client`, start using `npm start`
7. Navigate to app in [browser](http://localhost:3000)


## Discussion

Start time: 9:00 am Pacific

Unfortunately, I was not able to finish in the 4 hour timeframe (.

My first step was to download the provided code, get the simple server and frontend running, and begin planning. Initially I had trouble setting up my Go workspace to start the backend because I did not have my GOPATH correct. Once I had the API working for the `/api/hello/<name>` example, I went to set up the frontend. After using `create-react-app` and `npm install`, I encountered a dependency error when trying to use `npm run` with `babel-jest` because I had a more recent version downloaded on my computer. From initially reading the prompt and resolving these errors, almost 2 hours of my time were used, and thus I wasn’t able to finish on time. Later I had some trouble while calling the API with CORS and `Access-Control-Allow-Origin` that delayed finishing.

I was able to create an app that takes in only positive integers and accurately (until a Go int64 overflow) displays the Fibonacci Sequence up to the entered number of digits. The time and space complexity of this project are good with a time complexity of O(n) and a space complexity of O(1).


## TODO

Given more time (of the time I already went over), I would fix the Go tests to adequately test the Fibonacci function, and write Jest tests for the React frontend. The UI is also extremely basic and could be improved upon.
