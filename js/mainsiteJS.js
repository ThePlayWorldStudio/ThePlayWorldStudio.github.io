function Start()
{
	reg = true
    while reg:
	    name = prompt('Who are you&')
        if (name==' '):
	        reg=true
	    else:
		    alert('Hello, '+name)
}