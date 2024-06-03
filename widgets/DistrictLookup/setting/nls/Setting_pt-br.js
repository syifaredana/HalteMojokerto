// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Milhas",kilometers:"Quil\u00f4metros",feet:"P\u00e9s",meters:"Metros"},layerSetting:{layerSettingTabTitle:"Configura\u00e7\u00f5es da Pesquisa",buttonSet:"Configurar",selectLayersLabel:"Selecionar camada",selectLayersHintText:"Sugest\u00e3o: Utilizado para selecionar camada de pol\u00edgono e sua camada de ponto relacionada.",selectPrecinctSymbolLabel:"Selecionar s\u00edmbolo para destacar pol\u00edgono",selectGraphicLocationSymbol:"S\u00edmbolo de local ou endere\u00e7o",
graphicLocationSymbolHintText:"Sugest\u00e3o: S\u00edmbolo para endere\u00e7o pesquisado ou local clicado",precinctSymbolHintText:"Sugest\u00e3o: Utilizado para exibir s\u00edmbolo do pol\u00edgono selecionado",selectColorForPoint:"Selecionar cor para destacar ponto",selectColorForPointHintText:"Sugest\u00e3o: Utilizado para exibir cor de destaque para ponto selecionado"},searchSourceSetting:{searchSourceSettingTabTitle:"Configura\u00e7\u00f5es da Fonte de Pesquisa",searchSourceSettingTitle:"Configura\u00e7\u00f5es da Fonte de Pesquisa",
searchSourceSettingTitleHintText:"Adicione e configure servi\u00e7os de geoc\u00f3digo ou camadas de fei\u00e7\u00e3o como fontes de pesquisa. Estas fontes especificadas determinam o que \u00e9 pesquis\u00e1vel dentro da caixa de pesquisa.",addSearchSourceLabel:"Adicionar Fonte de Pesquisa",featureLayerLabel:"Camada de Fei\u00e7\u00e3o",geocoderLabel:"Geocodificador",nameTitle:"Nome",generalSettingLabel:"Configura\u00e7\u00f5es Gerais",allPlaceholderLabel:"Texto de local reservado para pesquisar todos:",
allPlaceholderHintText:"Sugest\u00e3o: Insira o texto a ser mostrado como reservado ao pesquisar todas as camadas e geocodificador",generalSettingCheckboxLabel:"Mostrar pop-up do local ou fei\u00e7\u00e3o localizada",countryCode:"C\u00f3digos de Regi\u00e3o e Pa\u00eds",countryCodeEg:"por exemplo ",countryCodeHint:"Deixar este valor em branco pesquisar\u00e1 todos os pa\u00edses e regi\u00f5es",questionMark:"?",searchInCurrentMapExtent:"Somente pesquisar na extens\u00e3o de mapa atual",zoomScale:"Escala de Zoom",
locatorUrl:"URL do Geocodificador",locatorName:"Nome do Geocodificador",locatorExample:"Exemplo",locatorWarning:"Esta vers\u00e3o do servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o \u00e9 suportado. O widget suporta servi\u00e7o de geocodifica\u00e7\u00e3o 10.0 e superior.",locatorTips:"As sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis, pois o servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o suporta o recursos de sugest\u00e3o.",layerSource:"Origem da Camada",setLayerSource:"Configurar Origem da Camada",
setGeocoderURL:"Configurar URL do Geocodificador",searchLayerTips:"As sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis, pois o servi\u00e7o da fei\u00e7\u00e3o n\u00e3o suporta o recursos de pagina\u00e7\u00e3o.",placeholder:"Texto do Placeholder",searchFields:"Pesquisar Campos",displayField:"Campo de Visualiza\u00e7\u00e3o",exactMatch:"Combina\u00e7\u00e3o Exata",maxSuggestions:"M\u00e1ximo de Sugest\u00f5es",maxResults:"M\u00e1ximo de Resultados",enableLocalSearch:"Habilitar pesquisa de local",
minScale:"Escala M\u00edn",minScaleHint:"Quando a escala do mapa for maior que esta escala, a pesquisa de local ser\u00e1 aplicada",radius:"Raio",radiusHint:"Especifica o raio de uma \u00e1rea ao redor do centro do mapa atual que \u00e9 utilizado para impulsionar o grau de candidatos de geocodifica\u00e7\u00e3o de forma que os candidatos mais pr\u00f3ximos ao local sejam retornados primeiro",meters:"Metros",setSearchFields:"Configurar Campos de Pesquisa",set:"Configurar",fieldName:"Nome",invalidUrlTip:"A URL ${URL} \u00e9 inv\u00e1lida ou inacess\u00edvel.",
invalidSearchSources:"Configura\u00e7\u00f5es de fonte de pesquisa inv\u00e1lida",errorMessageLabel:"Mensagem de erro",errorMessageHint:"Dica: Defina uma mensagem a ser exibida quando nenhum resultado for encontrado",noPrecinctFoundMsg:"Nenhum pol\u00edgono localizado para este endere\u00e7o ou local"},layerSelector:{selectPolygonLayerLabel:"Selecionar camada de pol\u00edgono",selectPolygonLayerHintText:"Sugest\u00e3o: Uitilizado para selecionar camada de pol\u00edgono.",selectRelatedPointLayerLabel:"Selecionar camada de ponto relacionada \u00e0 camada de pol\u00edgono",
selectRelatedPointLayerHintText:"Sugest\u00e3o:  Utilizado para selecionar camada de ponto relacionada \u00e0 camada de pol\u00edgono",polygonLayerNotHavingRelatedLayer:"Selecione uma camada de pol\u00edgono que tenha uma camada de ponto relacionada.",errorInSelectingPolygonLayer:"Selecione uma camada de pol\u00edgono que tenha uma camada de ponto relacionada.",errorInSelectingRelatedLayer:"Selecione a camada de ponto relacionada \u00e0 camada de pol\u00edgono."},routeSetting:{routeSettingTabTitle:"Configura\u00e7\u00f5es de Dire\u00e7\u00f5es",
routeServiceUrl:"Servi\u00e7o de rota",buttonSet:"Configurar",routeServiceUrlHintText:"Sugest\u00e3o: Clique em \u2018Configurar\u2019 para procurar e selecionar um servi\u00e7o de rota da an\u00e1lise de rede",directionLengthUnit:"Unidades do comprimento de dire\u00e7\u00e3o",unitsForRouteHintText:"Sugest\u00e3o: Utilizado para exibir unidades reportadas para rota",selectRouteSymbol:"Selecionar s\u00edmbolo para exibir rota",routeSymbolHintText:"Sugest\u00e3o: Utilizado para exibir s\u00edmbolo de linha da rota",
routingDisabledMsg:"Para habilitar dire\u00e7\u00f5es, garanta que a rota esteja habilitada no item do ArcGIS Online.",enableDirectionLabel:"Habilitar Dire\u00e7\u00f5es",enableDirectionText:"Sugest\u00e3o: Marque para habilitar dire\u00e7\u00f5es no widget"},networkServiceChooser:{arcgislabel:"Adicionar do ArcGIS Online",serviceURLabel:"Adicionar URL de Servi\u00e7o",routeURL:"URL da Rota",validateRouteURL:"Validar",exampleText:"Exemplo",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Especifique um servi\u00e7o de Rota v\u00e1lido.",rateLimitExceeded:"Limite de taxa excedido. Tente novamente mais tarde.",errorInvokingService:"O nome de usu\u00e1rio ou senha est\u00e1 incorreta."},symbolPickerPreviewText:"Visualizar:",showToolToSelectLabel:"Configurar bot\u00e3o de localiza\u00e7\u00e3o",showToolToSelectHintText:"Sugest\u00e3o: Forne\u00e7a um bot\u00e3o para configurar a localiza\u00e7\u00e3o no mapa em vez de sempre configurar a localiza\u00e7\u00e3o quando o mapa for clicado",
_localized:{}}});