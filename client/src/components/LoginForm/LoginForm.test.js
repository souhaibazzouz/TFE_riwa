import { Modal } from "bootstrap"
import { render } from "react-dom"

test('login', function () {
    render(<Modal title="bonjour les gens"><div id="demo"></div></Modal>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
})