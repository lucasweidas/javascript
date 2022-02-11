function printChildrenRecursive(t) {
  if (t.children.length > 0) {
    t.children.forEach(children => {
      console.log(children.name);
      printChildrenRecursive(children);
    });
  }
  return;
}

const tree = {
  name: 'Maria',
  children: [
    {
      name: 'Elisa',
      children: [],
    },
    {
      name: 'Pedro',
      children: [
        { name: 'Luisa', children: [] },
        { name: 'Laura', children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree);