export const Button = class {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }
    
    render() {
        const button = document.createElement('button')

        button.innerText = this.label

        button.style.border = '1px solid black'
        button.style.outline = 'none'
        button.style.borderRadius = '4px'
        button.style.margin = '4px'
        button.style.cursor = 'pointer'

        button.addEventListener(
            'click',
            () => this.onClick()
        )
        return button
    }
}

export default Button

