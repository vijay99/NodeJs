const todos =[
    {title :'Wake up',
     isDone : true},
    {title:'Morning run',
     isDone : false},
    {title : 'AWS course',
     isDone : true}
    ];


  //const thingsDone=  todos.filter( (todo)=>  todo.isDone === true);
  const thingsDoneTitle = todos.filter( (todo) => {
     if(todo.isDone === true)
        return todo.title;
  })

  console.log(thingsDoneTitle);