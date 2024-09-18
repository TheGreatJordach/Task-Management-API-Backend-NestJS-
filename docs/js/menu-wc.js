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
                                            'data-bs-target="#controllers-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' :
                                            'id="xs-controllers-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' :
                                        'id="xs-injectables-links-module-AppModule-461ef5aa2882f5d28a152d3a6a76b968daf3535074092fd2d1d298d0f80987d0a7e6716e1b98e93e3c255a534a8b8570053bf827254b14f1ff4c44ca61598be3"' }>
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
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-ca7bd6cba06e919f2f69ba7d8c7efc96470c5035399589ab18330ba90f9346e52ae96d7998d04588d5702e2dd1456114c3eaa68db0c4cf92ab8c16e91eaf8fe4"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-ca7bd6cba06e919f2f69ba7d8c7efc96470c5035399589ab18330ba90f9346e52ae96d7998d04588d5702e2dd1456114c3eaa68db0c4cf92ab8c16e91eaf8fe4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-ca7bd6cba06e919f2f69ba7d8c7efc96470c5035399589ab18330ba90f9346e52ae96d7998d04588d5702e2dd1456114c3eaa68db0c4cf92ab8c16e91eaf8fe4"' :
                                        'id="xs-injectables-links-module-DatabaseModule-ca7bd6cba06e919f2f69ba7d8c7efc96470c5035399589ab18330ba90f9346e52ae96d7998d04588d5702e2dd1456114c3eaa68db0c4cf92ab8c16e91eaf8fe4"' }>
                                        <li class="link">
                                            <a href="injectables/NeonDatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NeonDatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' :
                                            'id="xs-controllers-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' }>
                                            <li class="link">
                                                <a href="controllers/UsersWriteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersWriteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' :
                                        'id="xs-injectables-links-module-UsersModule-e11f700f539ee21cc1ae43038b88984901a3349a1aa36e734f9dc5903e61845d39064935ffaf852ca97ba0229598a2040ffa4084d4497c5101428af497c45d72"' }>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersWriteController.html" data-type="entity-link" >UsersWriteController</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NeonDatabaseService.html" data-type="entity-link" >NeonDatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReadOnlyUserService.html" data-type="entity-link" >ReadOnlyUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WriteUserService.html" data-type="entity-link" >WriteUserService</a>
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