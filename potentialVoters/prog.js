function voterResults(arr) {
    return arr.reduce((result, voter) => {
        if (voter.age >= 18 && voter.age <= 25) {
            result.numYoungPeople += 1;
            if (voter.voted) {
                result.numYoungVotes += 1;
            }
        } else if (voter.age >= 26 && voter.age <= 35) {
            result.numMidPeople += 1;
            if (voter.voted) {
                result.numMidVotesPeople += 1;
            }
        } else if (voter.age >= 36) {
            result.numOldPeople += 1;
            if (voter.voted) {
                result.numOldVotesPeople += 1;
            }
        }
        return result;
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidPeople: 0,
        numOldVotesPeople: 0,
        numOldPeople: 0
    });
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters));
// Output should be:
// { 
//   numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidPeople: 4,
//   numOldVotesPeople: 3,
//   numOldPeople: 4 
// }