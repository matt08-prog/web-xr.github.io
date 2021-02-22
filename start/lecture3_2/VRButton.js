/**
 * @author mrdoob / http://mrdoob.com
 * @author Mugen87 / https://github.com/Mugen87
 * @author NikLever / http://niklever.com
 */

class VRButton{

	constructor( renderer ) {
        this.renderer = renderer;
        
        if ( 'xr' in navigator ) {
            const button = document.createElement('Element')
            button.style.display = 'none'
            button.style.height = '40px'
            document.body.appendChild( button )

            navigator.xr.isSessionSupported('immersive-vrx').then ((suported) => {
                supported ? this.showEnterVR( button ) : this.showWebXRNotFound(
                button )
            })
		} else {
            
		}

    }

	showEnterVR( button ) {
    
    }

    disableButton( button ) {

        button.style.cursor = 'auto';
        button.style.opacity = '0.5';
        
        button.onmouseenter = null;
        button.onmouseleave = null;

        button.onclick = null;

    }

    showWebXRNotFound( button ) { 
        this.stylizeElement( button, false )
        this.disableButton(button)

        button.style.display = ''
        button.style.width = '100%'
        button.style.right = '0px'
        button.style.bottom = '0px'
        button.style.border = ''
        button.style.opacity = '1'
        button.style.fontSize = '13'
        button.textContent = 'VR Not Supported'
    }

    stylizeElement( element, green = true, fontSize = 13, ignorePadding = false ) {

        element.style.position = 'absolute';
        element.style.bottom = '20px';
        if (!ignorePadding) element.style.padding = '12px 6px';
        element.style.border = '1px solid #fff';
        element.style.borderRadius = '4px';
        element.style.background = (green) ? 'rgba(20,150,80,1)' : 'rgba(180,20,20,1)';
        element.style.color = '#fff';
        element.style.font = `normal ${fontSize}px sans-serif`;
        element.style.textAlign = 'center';
        element.style.opacity = '0.5';
        element.style.outline = 'none';
        element.style.zIndex = '999';
    }
};

export { VRButton };
