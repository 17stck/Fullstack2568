const names = ['Taylor', 'Donald', 'Natasha'];

const annoucements =  names.map(member => {
    return member + ' joined the contest.';
});

console.log(annoucements);