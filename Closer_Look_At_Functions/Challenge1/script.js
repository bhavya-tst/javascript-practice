const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer(Data1, data2) {
    // registerNewAnswer(){
    
    const que = `${this.question}\n${this.options.join('\n')}\n(Write option number)`;
    const ans = prompt(que);
    ans < this.options.length && ans >= 0
      ? this.answers[ans]++
      : alert("Enter a proper answer.");
      this.displayResult();
      this.displayResult('string');
  },
  displayResult(type="array"){
      if(type==="array"){
          console.log(this.answers);
      }
      else{
          let ans=`Poll results are ${this.answers.join(", ")}`;
          console.log(ans);
      }
  }
};
const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];
document
  .querySelector(".ans")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({answers:[5,2,3]},'string');

