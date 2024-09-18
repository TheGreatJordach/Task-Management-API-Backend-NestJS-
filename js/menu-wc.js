'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">task-management-api-backend-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' :
                                            'id="xs-controllers-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' :
                                        'id="xs-injectables-links-module-AppModule-7b712e8c4dbbeb29d948e1ed485bd19c8cc31cd552d8fa1ce08eaeaaa67a40e67c8400b2e8a5a931eeaa1ad6de21d86499de34ae7bb7661664a6ab6473f1128f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-8e162a1a7ca46179e24ac141cada5e3775700e73707aba26901213a69d727bf482c71ea3ba05ff5c0682c1902a3ec3ad66058dbf04de2a9481e2cb56871e6686"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-8e162a1a7ca46179e24ac141cada5e3775700e73707aba26901213a69d727bf482c71ea3ba05ff5c0682c1902a3ec3ad66058dbf04de2a9481e2cb56871e6686"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-8e162a1a7ca46179e24ac141cada5e3775700e73707aba26901213a69d727bf482c71ea3ba05ff5c0682c1902a3ec3ad66058dbf04de2a9481e2cb56871e6686"' :
                                        'id="xs-injectables-links-module-UsersModule-8e162a1a7ca46179e24ac141cada5e3775700e73707aba26901213a69d727bf482c71ea3ba05ff5c0682c1902a3ec3ad66058dbf04de2a9481e2cb56871e6686"' }>
                                        <li class="link">
                                            <a href="injectables/ReadOnlyUserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadOnlyUserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WriteUserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WriteUserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistryDate.html" data-type="entity-link" >RegistryDate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBaseDto.html" data-type="entity-link" >UserBaseDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});