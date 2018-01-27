
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1,  name: 'FTM1', link: 'http://www.ftmguide.org/ttherapybasics.html', description:'Testosterone', image:'http://www.ftmguide.org/ttherapybasics.html', source:'Hudsons Guide (www.ftm.org)', type:'1' },
        {id: 2,  name: 'MTF2',  link: 'https://www.wikihow.com/Transition-from-Male-to-Female-(Transgender)', description:'mtf howto', image:'http://roguehealthandfitness.com/dangers-estrogen-dominance-men/?print=print', source:'Wikihow', type:'2'},
        {id: 3,  name: 'Q3',link: 'https://transgenderteensurvivalguide.tumblr.com/post/59381012320/what-am-i', description:'What Am I?', image:'https://www.insuranceage.co.uk/sites/insuranceage/files/styles/landscape_750_463/public/import/IMG/422/357422/confused-man-computer-580x358.jpeg?itok=PsQfSHkj', source:'transgenderteensurvivalguide.tumblr.com', type:'3' },
        {id: 4,  name: 'NB4', link: 'http://genderqueerid.com/gq-links', description:'For everyone who does not identify within the binary' , image:'https://pbs.twimg.com/profile_images/879739904049258496/1TR4ID_6_400x400.jpg', source:'genderqueerid.com', type:'4'},
        {id: 5,  name: 'P5',link: 'https://www.psychologytoday.com/blog/when-your-adult-child-breaks-your-heart/201703/strategies-supporting-transgender-child', description:'How To Support Your Trans Child', image:'http://mediafiles.parentscanada.com/Images/Articles/December2014/kauffman_family.jpg', source:'psychologytoday.com', type:'5'},
  
      ]);
    });
};
