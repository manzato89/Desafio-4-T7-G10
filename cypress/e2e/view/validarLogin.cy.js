/// <reference types="cypress" />

import cLogin from "../../support/controller/cLogin";

describe('Validar Login', () => {

    var site = 'http://165.227.93.41/lojinha-web/v2/'
    var usuario = 'admin'
    var senha = 'admin'

    it('Validar Login', () => {
        cLogin.acessarSite(site)
        cLogin.informarUsuario(usuario)
        cLogin.informarSenha(senha)
        cLogin.clicarBtnEntrar()
    })

})