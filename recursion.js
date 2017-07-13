//RECURSION
//Something like a searching machine
var Searching = function Search(anyNode, nodeName)
{
	
	if(!anyNode)
	{

		return null;
	}
	if(anyNode.name === nodeName)
	{

		return anyNode.name;
	}

	
	return Search(anyNode.left, nodeName) || Search(anyNode.right, nodeName);
};


/*
	NOTE: 
	It is highly recommended NOT to generate a (binary) tree like the following code.
	If not understood why, please research "implementing binary trees"!
	The code beneath serves only simplicity and demonstration purposes.
	
	Also the order of the objects seems to be relevant!
*/


var rightChild =
{
	
	name:"right child",
	left:null,
	right:null
	
};


var leftChild =
{
	
	name:"left child",
	left:null,
	right:null
	
};


var leftParent =
{
	name:"left parent",
	left:leftChild,
	right:rightChild
};


var leaf =
{
	name:"leaf",
	left:null,
	right:null
};


var ROOT = 
{
	name:"ROOT",
	left: leftParent,
	right: leaf
	
};



//Checking which node is selected
function CheckAndSearch(healthy)
{
	var node = document.getElementsByName('node');
	var result = document.getElementById('result');
	
	for(var i = 0; i < node.length; i++)
	{
		
		if(node[i].checked && healthy === true)
		{
			
			//Should work
			result.innerHTML = Searching(ROOT,node[i].value);
			
		}
		else if(node[i].checked && healthy === false)
		{

			//Uncaught ReferenceError: Search is not defined
			result.innerHTML = Search(ROOT,node[i].value);		
			
		}
		
	}
	
}