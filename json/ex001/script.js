const objs = [
	{
		name: 'Lucas',
		age: 22,
		is_working: false,
		pc_specs: {
			cpu: 'i5',
			gpu: 'GTX 1060',
			ram: '16GB',
		},
		favorite_games: [
			'GTA 5',
			'Last of Us',
			'Battlefield 4',
			'Destiny 1',
			'Destiny 2',
			'CSGO',
		],
	},
	{
		name: 'Maria',
		age: 25,
		is_working: true,
		pc_specs: {
			cpu: 'i7',
			gpu: 'RTX 2070',
			ram: '16GB',
		},
		favorite_games: ['Last of Us', 'Destiny 2'],
	},
];

// How to convert a JavaScript Object to a JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// How to convert a JSON to a JavaScript Object
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map(person => console.log(person.name, person.favorite_games[0]));
