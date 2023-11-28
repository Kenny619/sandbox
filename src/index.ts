interface User{
	name: string,
	id: number
}

const user: User[] = [
	{
		name: "kenny",
		id: 1
	},
	{
		name: "nam",
		id: 2
	}
	
];

function getNames(users: User[]) {
	return users.map(u => u.name).filter(u => u);
}

type objArray = Array<object>;

const cards: objArray = [
	{
		suit: "heart",
		number: "10"
	},
	{
		suit: "spade",
		number:2
	}
]