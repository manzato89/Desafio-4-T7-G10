import { mLogin } from "../model/mLogin";
class cLogin {

    acessarSite(site) {
        cy.visit(site)
        cy.get(mLogin.fields.logoLojina)
            .should('exist')
    }


    informarUsuario(usuario) {
        cy.get(mLogin.fields.username)
            .should('be.visible')
            .type(usuario)
    }

    informarSenha(senha) {
        cy.get(mLogin.fields.password)
            .should('be.visible')
            .type(senha)
    }

    clicarBtnEntrar() {
        cy.get(mLogin.button.btnEntrar)
            .should('be.visible')
            .click()
    }


}
export default new cLogin();