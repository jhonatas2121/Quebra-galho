(function(){
"use strict";

var CAT=[
{n:"Construção e reformas",i:"🧱",c:"#fde7d9",p:["Pedreiro","Servente de pedreiro","Mestre de obras","Encanador","Eletricista","Pintor residencial","Pintor comercial","Azulejista","Gesseiro","Instalador de drywall","Telhadista","Carpinteiro","Marceneiro","Serralheiro","Soldador","Impermeabilizador","Instalador de pisos","Instalador de porcelanato","Instalador de portas","Instalador de janelas","Instalador de box","Instalador de calhas","Profissional de reformas","Aplicador de textura","Instalador de papel de parede"]},
{n:"Montagem e instalação",i:"🪑",c:"#e8e0d6",p:["Montador de móveis","Instalador de móveis planejados","Instalador de televisão","Instalador de suporte de TV","Instalador de cortinas","Instalador de persianas","Instalador de ar-condicionado","Instalador de ventiladores","Instalador de câmeras","Instalador de alarmes","Instalador de antenas","Instalador de internet","Técnico de redes","Instalador de chuveiros","Instalador de fechaduras"]},
{n:"Transporte e fretes",i:"🚚",c:"#e3e8ee",p:["Freteiro","Carreteiro","Motorista particular","Motoboy","Entregador","Carregador e descarregador","Ajudante de mudança","Empresa de mudanças","Transporte de móveis","Transporte de pequenas cargas","Transporte de materiais de construção"]},
{n:"Limpeza e serviços domésticos",i:"🧽",c:"#fff3c4",p:["Diarista","Faxineira","Faxineiro","Passadeira","Lavadeira","Cozinheira particular","Zelador","Cuidador de casas","Limpeza pós-obra","Limpeza de estofados","Limpeza de caixas d'água","Limpeza de piscinas","Dedetizador habilitado","Organizador residencial"]},
{n:"Jardinagem e áreas externas",i:"🌿",c:"#d9f2df",p:["Jardineiro","Podador de árvores","Cortador de grama","Paisagista","Piscineiro","Pedreiro de calçadas","Instalador de cercas","Manutenção de quintais","Manutenção de telhados"]},
{n:"Mecânica e automotivos",i:"🔧",c:"#e6e9ef",p:["Mecânico de automóveis","Mecânico de motos","Eletricista automotivo","Borracheiro","Lavador de veículos","Polidor automotivo","Martelinho de ouro","Instalador de som automotivo","Chaveiro automotivo","Socorro mecânico"]},
{n:"Beleza e cuidados pessoais",i:"💇",c:"#fde0ea",p:["Cabeleireiro","Barbeiro","Manicure","Pedicure","Designer de sobrancelhas","Maquiador","Depilador","Trancista","Massagista habilitado","Esteticista","Lash designer"]},
{n:"Tecnologia e assistência técnica",i:"💻",c:"#dbe7ff",p:["Técnico de informática","Técnico de celulares","Técnico de televisão","Técnico de eletrodomésticos","Técnico de geladeira","Técnico de máquina de lavar","Técnico de micro-ondas","Técnico de impressoras","Técnico de videogames"]},
{n:"Serviços pessoais e diversos",i:"🧵",c:"#efe3f7",p:["Costureira","Alfaiate","Sapateiro","Chaveiro","Vidraceiro","Relojoeiro","Fotógrafo","Filmagem de eventos","Decorador","Organizador de eventos","Professor particular","Aulas de reforço","Passeador de cães","Cuidador de animais","Banho e tosa","Personal trainer","Montador de eventos"]}
];
var UFS=["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
var HOME=[
["🧱","Construção e Reforma","#fde7d9","cat","0"],
["🧽","Limpeza","#fff3c4","cat","3"],
["⚡","Elétrica","#ffe8b8","prof","Eletricista"],
["🎨","Pintura","#dbe7ff","prof","Pintor residencial"],
["🪑","Montagem de Móveis","#e8e0d6","cat","1"],
["🚚","Frete","#e3e8ee","cat","2"],
["🌿","Jardinagem","#d9f2df","cat","4"]
];
var DURS=["Até 2 horas","Meio período","Um dia inteiro","De 2 a 3 dias","De 4 a 7 dias","Mais de uma semana","Duração a combinar"];
var PAGS=["Pix","Dinheiro","Cartão de crédito","Cartão de débito","Transferência bancária"];

var css=`
.cab{background:#0c4a2c;color:#fff;padding:16px 12px;display:flex;align-items:center;gap:10px;font-size:19px;font-weight:bold;position:sticky;top:0;z-index:5}
.cab .volta{font-size:32px;line-height:24px;cursor:pointer;padding:0 8px}
.form{padding:16px}
.form h4{margin:22px 0 6px;color:#14532d;font-size:17px}
.form label{display:block;font-size:13px;color:#4a5750;margin:12px 0 4px;font-weight:bold}
.form input,.form select,.form textarea{width:100%;padding:13px;border:1.5px solid #d3dad6;border-radius:12px;font-size:16px;background:#fff;font-family:inherit;color:#1f2a24}
.form textarea{min-height:90px}
.form label.ck{display:flex;align-items:center;gap:10px;padding:9px 2px;font-size:15px;font-weight:normal;color:#1f2a24;margin:0}
.form label.ck input{width:22px;height:22px;flex:none;padding:0}
.duas{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.btnv,.btnc{display:block;width:100%;padding:16px;border-radius:14px;font-size:17px;font-weight:bold;margin-top:16px;cursor:pointer;font-family:inherit}
.btnv{background:#1B8A4B;color:#fff;border:2px solid #1B8A4B}
.btnc{background:#fff;color:#1B8A4B;border:2px solid #1B8A4B}
.aviso,.erro,.ok{border-radius:12px;padding:12px;font-size:13px;line-height:1.45;margin:12px 0}
.aviso{background:#fff7e0;border:1px solid #f0d98a;color:#6b5400}
.erro{background:#fdeaea;border:1px solid #f1b5b5;color:#a12626}
.ok{background:#e6f6ec;border:1px solid #a8dbb9;color:#14532d}
.sub{font-size:13px;color:#5b665f;line-height:1.4}
.opcao{background:#fff;border-radius:18px;padding:20px;box-shadow:0 1px 6px rgba(0,0,0,.1);margin-top:14px;cursor:pointer;font-size:17px;color:#14532d}
.lin{background:#fff;border-radius:14px;padding:16px;margin-top:10px;box-shadow:0 1px 4px rgba(0,0,0,.08);display:flex;justify-content:space-between;font-size:16px;cursor:pointer}
.avatar{width:54px;height:54px;border-radius:50%;background:#1B8A4B;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;flex:none}
.avatar.grande{width:84px;height:84px;font-size:36px;margin:10px auto}
.nomeP{text-align:center;font-size:21px;font-weight:bold;color:#14532d}
.card{background:#fff;border-radius:16px;padding:14px;margin-top:12px;box-shadow:0 1px 6px rgba(0,0,0,.08);display:flex;gap:12px;align-items:center;cursor:pointer}
.card b{color:#14532d;font-size:16px}
.tag{display:inline-block;background:#e6f6ec;color:#14532d;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:bold;margin:4px 4px 0 0}
.sec2{margin-top:16px}
.sec2 b{color:#14532d}
.det{background:#fff;border:1.5px solid #d3dad6;border-radius:12px;padding:10px 12px;margin-top:8px}
.det summary{font-weight:bold;color:#14532d;cursor:pointer;padding:4px 0}
.det .rol{max-height:260px;overflow:auto;margin-top:6px}
.toast{position:fixed;left:16px;right:16px;bottom:96px;background:#1f2a24;color:#fff;padding:14px;border-radius:12px;font-size:14px;text-align:center;z-index:50}
`;
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

function $(id){return document.getElementById(id)}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function nz(s){return String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function ler(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
function gravar(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function V(id){var e=$(id);return e?String(e.value||"").trim():""}
function CKD(id){var e=$(id);return !!(e&&e.checked)}
function MARC(cls){return Array.prototype.map.call(document.querySelectorAll("."+cls+":checked"),function(e){return e.value})}
function ini(n){return String(n||"?").trim().charAt(0).toUpperCase()}
function toast(t){var d=document.createElement("div");d.className="toast";d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},3300)}
function fmt(v){var n=parseFloat(String(v).replace(",","."));return isNaN(n)?"":"R$ "+n.toFixed(2).replace(".",",")}
function menor(pr){var m=null;["diaria","hora","servico","minimo"].forEach(function(k){var n=parseFloat(String(pr[k]||"").replace(",","."));if(!isNaN(n)&&(m===null||n<m))m=n});return m}

function L(id,lab,tipo,ph){return '<label for="'+id+'">'+lab+'</label><input id="'+id+'" type="'+(tipo||"text")+'" placeholder="'+(ph||"")+'" autocomplete="off">'}
function CK(id,lab){return '<label class="ck"><input type="checkbox" id="'+id+'"> '+lab+'</label>'}
function CKV(cls,val){return '<label class="ck"><input type="checkbox" class="'+cls+'" value="'+esc(val)+'"> '+esc(val)+'</label>'}
function SEL(id,lab,ops){var o='<option value="">Selecione</option>';ops.forEach(function(x){o+="<option>"+esc(x)+"</option>"});return '<label for="'+id+'">'+lab+'</label><select id="'+id+'">'+o+"</select>"}
function CAB(t,volta){return '<div class="cab"><span class="volta" data-act="ir" data-arg="'+volta+'">‹</span>'+esc(t)+"</div>"}
function ENDER(p){
  var uf='<option value="">UF</option>';UFS.forEach(function(u){uf+="<option>"+u+"</option>"});
  return L(p+"cep","CEP","tel","00000-000")+
  '<div class="duas"><div><label for="'+p+'uf">Estado</label><select id="'+p+'uf">'+uf+"</select></div><div>"+L(p+"cidade","Cidade")+"</div></div>"+
  L(p+"bairro","Bairro")+L(p+"rua","Rua")+'<div class="duas"><div>'+L(p+"num","Número","tel")+"</div><div>"+L(p+"comp","Complemento")+"</div></div>";
}
function tela(id,html){var d=document.createElement("div");d.id=id;d.className="tela";d.innerHTML=html;document.body.insertBefore(d,$("menu"));return d}
function msg(id,itens,tipo){
  var el=$(id);if(!el)return;
  var t=Array.isArray(itens)?itens:[itens];
  el.className=tipo;el.innerHTML=t.map(esc).join("<br>");
  el.style.display="block";
  try{el.scrollIntoView({behavior:"smooth",block:"center"})}catch(e){}
}
function cpfOk(s){s=String(s).replace(/\D/g,"");if(s.length!==11||/^(\d)\1+$/.test(s))return false;for(var t=9;t<11;t++){var d=0,c;for(c=0;c<t;c++)d+=s[c]*((t+1)-c);d=((10*d)%11)%10;if(+s[t]!==d)return false}return true}

/* ---------- telas ---------- */
tela("escolha",CAB("Criar conta","splash")+
'<div class="form"><h4>Como você quer usar o app?</h4>'+
'<div class="opcao" data-act="ir" data-arg="cadCliente"><b>🔎 Preciso contratar um serviço</b><br><span class="sub">Encontre profissionais perto de você e peça orçamento grátis.</span></div>'+
'<div class="opcao" data-act="ir" data-arg="cadPro"><b>🛠️ Sou profissional</b><br><span class="sub">Divulgue seu trabalho e receba pedidos de orçamento.</span></div>'+
'<div class="aviso">A mesma pessoa poderá ter as duas modalidades na mesma conta. Isso será ativado junto com o banco de dados.</div>'+
'<p class="sub" style="text-align:center;margin-top:14px" data-act="ir" data-arg="entrar"><u>Já tenho conta</u></p></div>');

tela("entrar",CAB("Entrar","splash")+
'<div class="form">'+L("e_email","E-mail","email")+L("e_senha","Senha","password")+
'<div id="e_msg" style="display:none"></div>'+
'<button class="btnv" data-act="entrar">ENTRAR</button>'+
'<button class="btnc" data-act="ir" data-arg="inicio">Só olhar o app</button>'+
'<button class="btnc" data-act="ir" data-arg="escolha">Criar conta</button></div>');

tela("cadCliente",CAB("Cadastro de cliente","escolha")+
'<div class="form"><div class="aviso">Por enquanto seus dados ficam salvos só neste aparelho. Senha e CPF não são guardados até conectarmos o banco seguro. Foto de perfil chega junto com o armazenamento de imagens.</div>'+
'<h4>Seus dados</h4>'+L("c_nome","Nome completo")+L("c_email","E-mail","email")+L("c_senha","Senha (mínimo 6 caracteres)","password")+L("c_senha2","Confirmar senha","password")+
L("c_tel","Telefone (com DDD)","tel")+L("c_whats","WhatsApp","tel")+L("c_cpf","CPF (só quando precisar contratar ou pagar)","tel")+
'<h4>Endereço</h4>'+ENDER("c_")+
'<button class="btnc" type="button" data-act="gps">📍 Usar minha localização</button><div id="gpsMsg" class="sub" style="margin-top:6px"></div>'+
'<div id="c_msg" style="display:none"></div>'+
'<button class="btnv" data-act="enviarCliente">FINALIZAR CADASTRO</button></div>');

var optsProf='<option value="">Selecione</option>';
CAT.forEach(function(c){optsProf+='<optgroup label="'+esc(c.n)+'">';c.p.forEach(function(p){optsProf+="<option>"+esc(p)+"</option>"});optsProf+="</optgroup>"});
optsProf+='<option value="__outra">Outra profissão</option>';
var secHtml="";CAT.forEach(function(c){secHtml+='<div class="sub" style="margin-top:8px"><b>'+esc(c.n)+"</b></div>";c.p.forEach(function(p){secHtml+=CKV("p_sec",p)})});
var pagHtml="";PAGS.forEach(function(p){pagHtml+=CKV("p_pag",p)});
var atendeOps=["Apenas no meu bairro","Na minha cidade","Em cidades vizinhas","Em um raio de quilômetros"];

tela("cadPro",CAB("Cadastro de profissional","escolha")+
'<div class="form"><div class="aviso">Por enquanto seus dados ficam salvos só neste aparelho. CPF, telefone, senha e endereço completo não são guardados nem exibidos. Fotos e vídeos de trabalhos chegam com o armazenamento. Profissões regulamentadas vão exigir comprovação na verificação de documentos.</div>'+
'<h4>Dados pessoais</h4>'+L("p_nome","Nome completo")+L("p_cpf","CPF","tel")+L("p_email","E-mail","email")+L("p_senha","Senha (mínimo 6 caracteres)","password")+L("p_senha2","Confirmar senha","password")+
L("p_tel","Telefone (com DDD)","tel")+L("p_whats","WhatsApp","tel")+L("p_nasc","Data de nascimento","date")+
'<h4>Endereço e localização</h4>'+ENDER("p_")+
'<button class="btnc" type="button" data-act="gps">📍 Usar minha localização</button><div id="gpsMsg" class="sub" style="margin-top:6px"></div>'+
'<div class="aviso">Só a distância aproximada aparece para os clientes. Seu endereço completo nunca é exibido.</div>'+
SEL("p_atende","Onde você atende?",atendeOps)+L("p_raio","Raio de atendimento em km (se escolheu raio)","tel")+
'<h4>Dados profissionais</h4><label for="p_prof">Profissão principal</label><select id="p_prof">'+optsProf+'</select>'+
'<div id="p_outraBox" style="display:none">'+L("p_outra","Qual é a sua profissão?")+"</div>"+
'<details class="det"><summary>Profissões secundárias (opcional)</summary><div class="rol">'+secHtml+"</div></details>"+
L("p_esp","Especialidades")+
'<label for="p_desc">Descrição dos serviços</label><textarea id="p_desc" placeholder="Conte o que você faz e como trabalha"></textarea>'+
L("p_anos","Tempo de atuação na profissão (anos)","tel")+
'<label for="p_exp">Experiência profissional</label><textarea id="p_exp"></textarea>'+
L("p_cursos","Cursos, qualificações e certificações")+
'<h4>Preços e condições</h4><div class="duas"><div>'+L("p_diaria","Valor da diária (R$)","tel")+"</div><div>"+L("p_hora","Valor por hora (R$)","tel")+"</div></div>"+
'<div class="duas"><div>'+L("p_servico","Valor por serviço (R$)","tel")+"</div><div>"+L("p_visita","Visita/avaliação (R$)","tel")+"</div></div>"+
'<div class="duas"><div>'+L("p_minimo","Preço mínimo (R$)","tel")+"</div><div>"+L("p_desloc","Deslocamento (R$)","tel")+"</div></div>"+
CK("p_nego","Aceito negociar o preço")+CK("p_meio","Aceito serviços de meio período")+CK("p_dia","Aceito serviços de um dia inteiro")+CK("p_varios","Aceito serviços de vários dias")+
CK("p_gratis","O preço depende de avaliação e o orçamento é gratuito")+
'<h4>Formas de pagamento aceitas</h4>'+pagHtml+
'<div id="p_msg" style="display:none"></div>'+
'<button class="btnv" data-act="enviarPro">FINALIZAR CADASTRO</button></div>');

tela("cat","");
tela("busca","");
tela("perfilPro","");
tela("orc","");
tela("meusOrc","");

/* ---------- grades ---------- */
function montarGrades(){
  var a="";
  HOME.forEach(function(c){a+='<div class="ic" data-act="'+c[3]+'" data-arg="'+esc(c[4])+'"><div class="bola" style="background:'+c[2]+'">'+c[0]+"</div>"+c[1]+"</div>"});
  a+='<div class="ic" data-act="ir" data-arg="categorias"><div class="bola" style="background:#eceeed">⋯</div>Ver mais</div>';
  var b="";
  CAT.forEach(function(c,i){b+='<div class="cartao" data-act="cat" data-arg="'+i+'"><div class="foto" style="background:'+c.c+'">'+c.i+'</div><div class="nome">'+esc(c.n)+"</div></div>"});
  $("gradeInicio").innerHTML=a;$("gradeCats").innerHTML=b;
}

/* ---------- buscas ---------- */
function abrirCat(i){
  var c=CAT[i];if(!c)return;
  var h=CAB(c.n,"categorias")+'<div class="form"><div class="sub">Toque na profissão para ver os profissionais cadastrados.</div>';
  c.p.forEach(function(p){h+='<div class="lin" data-act="prof" data-arg="'+esc(p)+'">'+esc(p)+"<span>›</span></div>"});
  $("cat").innerHTML=h+"</div>";window.ir("cat");
}
function listaPros(){return ler("qg_pros",[])}
function renderBusca(titulo,lista){
  var h=CAB(titulo,"categorias")+'<div class="form">';
  if(!lista.length){h+='<div class="aviso">Ainda não há profissionais cadastrados para isso. Quando houver cadastros, eles aparecem aqui.</div>'}
  lista.forEach(function(p){
    var m=menor(p.precos||{});
    h+='<div class="card" data-act="pro" data-arg="'+esc(p.id)+'"><div class="avatar">'+esc(ini(p.nome))+'</div><div><b>'+esc(p.nome)+'</b><br><span class="sub">'+esc(p.prof)+' • '+esc(p.bairro)+", "+esc(p.cidade)+'</span><br><span class="sub">Sem avaliações ainda • '+(m!==null?"a partir de "+fmt(m):"preço sob orçamento")+"</span></div></div>";
  });
  $("busca").innerHTML=h+"</div>";window.ir("busca");
}
function abrirProf(nome){
  renderBusca(nome,listaPros().filter(function(p){return p.prof===nome||(p.sec||[]).indexOf(nome)>=0}));
}
function buscaTexto(t){
  t=nz(t);if(!t)return;
  renderBusca("Resultados",listaPros().filter(function(p){return nz([p.prof,(p.sec||[]).join(" "),p.nome,p.bairro,p.cidade].join(" ")).indexOf(t)>=0}));
}

/* ---------- perfil público ---------- */
var PRO_ATUAL=null;
function abrirPro(id){
  var p=listaPros().filter(function(x){return x.id===id})[0];if(!p)return;
  PRO_ATUAL=id;
  var fav=ler("qg_fav",[]).indexOf(id)>=0,pr=p.precos||{};
  var h=CAB("Perfil do profissional","busca")+'<div class="form"><div class="avatar grande">'+esc(ini(p.nome))+'</div><div class="nomeP">'+esc(p.nome)+'</div><div class="sub" style="text-align:center">'+esc(p.prof)+" • "+esc(p.bairro)+", "+esc(p.cidade)+(p.uf?" - "+esc(p.uf):"")+"</div>";
  h+='<div style="text-align:center;margin-top:8px"><span class="tag">⭐ Sem avaliações ainda</span>';
  if(p.gratis)h+='<span class="tag">Orçamento gratuito</span>';
  if(p.nego)h+='<span class="tag">Aceita negociar</span>';
  h+="</div>";
  if(p.desc)h+='<div class="sec2"><b>Sobre os serviços</b><br>'+esc(p.desc)+"</div>";
  if(p.esp)h+='<div class="sec2"><b>Especialidades</b><br>'+esc(p.esp)+"</div>";
  if(p.anos)h+='<div class="sec2"><b>Experiência</b><br>'+esc(p.anos)+" ano(s) de atuação</div>";
  var pl="";
  [["diaria","Diária"],["hora","Por hora"],["servico","Por serviço"],["visita","Visita/avaliação"],["minimo","Mínimo"],["desloc","Deslocamento"]].forEach(function(k){if(fmt(pr[k[0]]))pl+=k[1]+": "+fmt(pr[k[0]])+"<br>"});
  h+='<div class="sec2"><b>Preços</b><br>'+(pl||"Sob orçamento")+"</div>";
  var disp=[];if(p.meio)disp.push("meio período");if(p.dia)disp.push("um dia inteiro");if(p.varios)disp.push("vários dias");
  if(disp.length)h+='<div class="sec2"><b>Aceita serviços de</b><br>'+disp.join(", ")+"</div>";
  if((p.pag||[]).length)h+='<div class="sec2"><b>Formas de pagamento</b><br>'+p.pag.map(esc).join(", ")+"</div>";
  h+='<div class="sec2"><b>Avaliações</b><br><span class="sub">Ainda sem avaliações. Elas aparecem depois de serviços contratados pelo app.</span></div>';
  h+='<button class="btnv" data-act="orc" data-arg="'+esc(id)+'">SOLICITAR ORÇAMENTO</button>'+
     '<div class="duas"><button class="btnc" data-act="breve">Conversar</button><button class="btnc" data-act="breve">Agendar</button></div>'+
     '<button class="btnc" data-act="fav" data-arg="'+esc(id)+'">'+(fav?"💚 Nos favoritos":"🤍 Favoritar profissional")+"</button></div>";
  $("perfilPro").innerHTML=h;window.ir("perfilPro");
}
function toggleFav(id){
  var f=ler("qg_fav",[]),i=f.indexOf(id);
  if(i>=0)f.splice(i,1);else f.push(id);
  gravar("qg_fav",f);abrirPro(id);
}
function renderFav(){
  var f=ler("qg_fav",[]),lista=listaPros().filter(function(p){return f.indexOf(p.id)>=0});
  var h='<div class="topo2">Favoritos</div><div class="form">';
  if(!lista.length)h+='<div class="vazio">Seus profissionais favoritos vão aparecer aqui.</div>';
  lista.forEach(function(p){h+='<div class="card" data-act="pro" data-arg="'+esc(p.id)+'"><div class="avatar">'+esc(ini(p.nome))+'</div><div><b>'+esc(p.nome)+'</b><br><span class="sub">'+esc(p.prof)+" • "+esc(p.cidade)+"</span></div></div>"});
  $("favoritos").innerHTML=h+"</div>";
}

/* ---------- orçamento ---------- */
function abrirOrc(id){
  var p=listaPros().filter(function(x){return x.id===id})[0];if(!p)return;
  PRO_ATUAL=id;
  var h=CAB("Solicitar orçamento","perfilPro")+'<div class="form"><div class="sub">Para: <b>'+esc(p.nome)+"</b> ("+esc(p.prof)+")</div>"+
  L("o_tipo","Tipo de serviço","text","Ex.: instalação de 3 ventiladores")+
  '<label for="o_desc">Descreva o que precisa ser feito</label><textarea id="o_desc" placeholder="Conte o que aconteceu, onde é, medidas aproximadas e o que já foi tentado."></textarea>'+
  '<div class="sub">Fotos e vídeos do problema chegam com o armazenamento de imagens.</div>'+
  L("o_end","Endereço onde será o serviço")+
  '<div class="duas"><div>'+L("o_data","Data desejada","date")+"</div><div>"+L("o_hora","Horário","time")+"</div></div>"+
  SEL("o_tam","Tamanho do serviço",["Pequeno","Médio","Grande"])+L("o_amb","Quantidade de ambientes (se houver)","tel")+L("o_med","Medidas aproximadas (se precisar)")+
  SEL("o_dur","Duração estimada",DURS)+CK("o_urg","⚡ Marcar como urgente")+
  '<div id="o_msg" style="display:none"></div><button class="btnv" data-act="enviarOrc">ENVIAR SOLICITAÇÃO</button></div>';
  $("orc").innerHTML=h;window.ir("orc");
}
function enviarOrc(){
  var er=[];
  if(V("o_tipo").length<3)er.push("Informe o tipo de serviço.");
  if(V("o_desc").length<15)er.push("Descreva melhor o que precisa (pelo menos uma frase).");
  if(!V("o_data"))er.push("Escolha a data desejada.");
  if(er.length){msg("o_msg",er,"erro");return}
  var o=ler("qg_orc",[]);
  o.push({id:"o"+Date.now(),pro:PRO_ATUAL,tipo:V("o_tipo"),desc:V("o_desc"),end:V("o_end"),data:V("o_data"),hora:V("o_hora"),tam:V("o_tam"),amb:V("o_amb"),med:V("o_med"),dur:V("o_dur"),urg:CKD("o_urg"),criado:new Date().toISOString()});
  gravar("qg_orc",o);
  msg("o_msg","Pedido salvo neste aparelho. O envio ao profissional será ativado junto com o banco de dados.","ok");
}
function renderMeusOrc(){
  var o=ler("qg_orc",[]),pros=listaPros();
  var h=CAB("Meus orçamentos","perfil")+'<div class="form">';
  if(!o.length)h+='<div class="vazio">Você ainda não pediu orçamentos.</div>';
  o.slice().reverse().forEach(function(x){
    var p=pros.filter(function(y){return y.id===x.pro})[0];
    h+='<div class="card" style="display:block"><b>'+esc(x.tipo)+'</b><br><span class="sub">Para: '+esc(p?p.nome:"profissional")+" • "+esc(x.data)+(x.urg?" • urgente":"")+'</span><br><span class="sub">Status: rascunho salvo neste aparelho</span></div>';
  });
  $("meusOrc").innerHTML=h+"</div>";
}

/* ---------- cadastros ---------- */
function salvarUser(tipo,nome,email,cidade,bairro){
  var u=ler("qg_user",{tipos:[]});
  if(!u.tipos)u.tipos=[];
  if(u.tipos.indexOf(tipo)<0)u.tipos.push(tipo);
  u.nome=nome;u.email=email;u.cidade=cidade;u.bairro=bairro;
  gravar("qg_user",u);
}
function validaBase(p){
  var er=[];
  if(V(p+"nome").length<3)er.push("Informe seu nome completo.");
  if(!/^\S+@\S+\.\S+$/.test(V(p+"email")))er.push("E-mail inválido.");
  if(V(p+"senha").length<6)er.push("A senha precisa ter pelo menos 6 caracteres.");
  if(V(p+"senha")!==V(p+"senha2"))er.push("As senhas não são iguais.");
  if(V(p+"tel").replace(/\D/g,"").length<10)er.push("Telefone inválido (com DDD).");
  if(V(p+"cep").replace(/\D/g,"").length!==8)er.push("CEP inválido.");
  if(!V(p+"cidade"))er.push("Informe a cidade.");
  if(!V(p+"bairro"))er.push("Informe o bairro.");
  return er;
}
function enviarCliente(){
  var er=validaBase("c_");
  if(V("c_cpf")&&!cpfOk(V("c_cpf")))er.push("CPF inválido.");
  if(er.length){msg("c_msg",er,"erro");return}
  salvarUser("cliente",V("c_nome"),V("c_email"),V("c_cidade"),V("c_bairro"));
  toast("Cadastro de cliente salvo neste aparelho.");
  window.ir("inicio");
}
function enviarPro(){
  var er=validaBase("p_");
  if(!cpfOk(V("p_cpf")))er.push("CPF inválido.");
  var nasc=V("p_nasc");
  if(!nasc)er.push("Informe a data de nascimento.");
  else{var d=new Date(nasc),h=new Date();var idade=h.getFullYear()-d.getFullYear();if(h<new Date(h.getFullYear(),d.getMonth(),d.getDate()))idade--;if(idade<18)er.push("Profissionais precisam ter 18 anos ou mais.")}
  var prof=V("p_prof");
  if(!prof)er.push("Escolha sua profissão principal.");
  if(prof==="__outra"){prof=V("p_outra");if(prof.length<3)er.push("Escreva qual é a sua profissão.")}
  if(V("p_desc").length<10)er.push("Descreva seus serviços.");
  if(!V("p_atende"))er.push("Diga onde você atende.");
  if(!MARC("p_pag").length)er.push("Marque pelo menos uma forma de pagamento.");
  if(er.length){msg("p_msg",er,"erro");return}
  var pros=listaPros();
  pros.push({id:"p"+Date.now(),nome:V("p_nome"),prof:prof,sec:MARC("p_sec"),esp:V("p_esp"),desc:V("p_desc"),anos:V("p_anos"),exp:V("p_exp"),cursos:V("p_cursos"),
    cidade:V("p_cidade"),bairro:V("p_bairro"),uf:V("p_uf"),atende:V("p_atende"),raio:V("p_raio"),
    precos:{diaria:V("p_diaria"),hora:V("p_hora"),servico:V("p_servico"),visita:V("p_visita"),minimo:V("p_minimo"),desloc:V("p_desloc")},
    nego:CKD("p_nego"),meio:CKD("p_meio"),dia:CKD("p_dia"),varios:CKD("p_varios"),gratis:CKD("p_gratis"),pag:MARC("p_pag")});
  gravar("qg_pros",pros);
  salvarUser("profissional",V("p_nome"),V("p_email"),V("p_cidade"),V("p_bairro"));
  toast("Cadastro de profissional salvo neste aparelho.");
  window.ir("perfil");
}
function entrar(){
  if(!V("e_email")||!V("e_senha")){msg("e_msg","Preencha e-mail e senha.","erro");return}
  msg("e_msg","O login de verdade será ativado quando conectarmos o banco de dados (próxima etapa). Por enquanto, use Só olhar o app.","aviso");
}
function pegarGps(){
  var el=$("gpsMsg");
  if(!navigator.geolocation){el.textContent="Seu aparelho não permite localização.";return}
  el.textContent="Aguardando sua autorização...";
  navigator.geolocation.getCurrentPosition(function(p){
    gravar("qg_loc",{lat:Math.round(p.coords.latitude*100)/100,lon:Math.round(p.coords.longitude*100)/100});
    el.textContent="Localização aproximada captada. Ela só serve para achar profissionais perto de você.";
  },function(){el.textContent="Você não autorizou a localização. Pode preencher o CEP manualmente."},{timeout:12000});
}
function apagar(){
  if(!confirm("Apagar todos os dados salvos neste aparelho?"))return;
  ["qg_user","qg_pros","qg_fav","qg_orc","qg_loc"].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  window.ir("splash");
}

/* ---------- perfil ---------- */
function lin(t,go){return '<div class="lin" data-act="ir" data-arg="'+go+'">'+t+"<span>›</span></div>"}
function renderPerfil(){
  var u=ler("qg_user",null),h='<div class="topo2">Perfil</div><div class="form">';
  if(!u){
    h+='<div class="vazio">Você ainda não criou conta neste aparelho.</div><button class="btnv" data-act="ir" data-arg="escolha">Criar conta</button><button class="btnc" data-act="ir" data-arg="entrar">Entrar</button>';
  }else{
    var tp=(u.tipos||[]).map(function(t){return t==="cliente"?"Cliente":"Profissional"}).join(" e ");
    h+='<div class="avatar grande">'+esc(ini(u.nome))+'</div><div class="nomeP">'+esc(u.nome)+'</div><div class="sub" style="text-align:center">'+esc(tp)+" • "+esc(u.cidade)+"</div>";
    h+=lin("Meus orçamentos","meusOrc")+lin("Favoritos","favoritos");
    if((u.tipos||[]).indexOf("cliente")<0)h+=lin("Usar também como cliente","cadCliente");
    if((u.tipos||[]).indexOf("profissional")<0)h+=lin("Cadastrar como profissional","cadPro");
    h+='<button class="btnc" data-act="apagar">Apagar meus dados deste aparelho</button>';
  }
  $("perfil").innerHTML=h+'<div class="aviso">Conta de verdade, chat, pagamentos e notificações chegam quando conectarmos o banco de dados.</div></div>';
}

/* ---------- ligações ---------- */
var SEM_MENU=["splash","escolha","entrar","cadCliente","cadPro","orc"];
var orig=window.ir;
window.ir=function(t){
  if(t==="perfil")renderPerfil();
  if(t==="favoritos")renderFav();
  if(t==="meusOrc")renderMeusOrc();
  orig(t);
  $("menu").style.display=SEM_MENU.indexOf(t)>=0?"none":"flex";
};
var ACT={
  ir:function(a){window.ir(a)},
  cat:function(a){abrirCat(+a)},
  prof:function(a){abrirProf(a)},
  pro:function(a){abrirPro(a)},
  fav:function(a){toggleFav(a)},
  orc:function(a){abrirOrc(a)},
  breve:function(){toast("Esta função será ativada junto com o banco de dados (próxima etapa).")},
  gps:pegarGps,enviarCliente:enviarCliente,enviarPro:enviarPro,enviarOrc:enviarOrc,entrar:entrar,apagar:apagar
};
document.addEventListener("click",function(e){
  var a=e.target.closest("[data-act]");if(!a)return;
  var f=ACT[a.getAttribute("data-act")];if(f)f(a.getAttribute("data-arg"),a);
});
document.addEventListener("input",function(e){
  var t=e.target;
  if(t.id&&/cep$/.test(t.id)){
    var d=t.value.replace(/\D/g,"");
    if(d.length===8){
      var p=t.id.slice(0,-3);
      fetch("https://viacep.com.br/ws/"+d+"/json/").then(function(r){return r.json()}).then(function(j){
        if(j&&!j.erro){
          if($(p+"uf"))$(p+"uf").value=j.uf||"";
          if($(p+"cidade"))$(p+"cidade").value=j.localidade||"";
          if($(p+"bairro"))$(p+"bairro").value=j.bairro||"";
          if($(p+"rua"))$(p+"rua").value=j.logradouro||"";
        }
      }).catch(function(){});
    }
  }
});
document.addEventListener("change",function(e){
  if(e.target.id==="p_prof")$("p_outraBox").style.display=e.target.value==="__outra"?"block":"none";
});
var bi=document.querySelector("#inicio .busca input");
if(bi)bi.addEventListener("keydown",function(e){if(e.key==="Enter")buscaTexto(bi.value)});
var bEntrar=document.querySelector("#splash .btn.verde"),bCriar=document.querySelector("#splash .btn.borda");
if(bEntrar)bEntrar.onclick=function(){window.ir("entrar")};
if(bCriar)bCriar.onclick=function(){window.ir("escolha")};
montarGrades();
})();
