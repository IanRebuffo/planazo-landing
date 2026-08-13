// Términos y Condiciones de Planazo — fuente única del texto legal.
//
// La numeración NO se escribe a mano: el número de sección sale del índice del
// array y el de subsección del índice dentro de la sección. Borrar o mover una
// sección renumera todo solo; por eso adentro del texto las referencias cruzadas
// van por nombre («Soporte y reclamos») y nunca por número.
//
// El mismo archivo, con la misma forma, vive en la app en
// planazo/constants/terminos.ts. Si tocás uno, copiá el otro.

export const TERMINOS_VERSION = '1.0';
export const TERMINOS_ACTUALIZADO = '13 de agosto de 2026';

/** URL pública del documento (landing). Se usa para compartirlo fuera de la app. */
export const TERMINOS_URL = 'https://www.planazoco.ar/terminos/';

export const EMAIL_SOPORTE = 'soporte@planazoco.ar';
export const EMAIL_CONTACTO = 'contacto@planazoco.ar';

export type BloqueLegal =
  /** Párrafo. Admite **negrita** con dobles asteriscos. */
  | { tipo: 'p'; texto: string }
  /** Lista de ítems (viñetas). Admite **negrita**. */
  | { tipo: 'lista'; items: string[] }
  /** Título de subsección. Se numera solo: 6.1, 6.2, … */
  | { tipo: 'sub'; titulo: string };

export type SeccionLegal = {
  /** Ancla estable para enlazar la sección desde afuera. No depende del número. */
  id: string;
  titulo: string;
  bloques: BloqueLegal[];
};

export const TERMINOS: SeccionLegal[] = [
  {
    id: 'quienes-somos',
    titulo: 'Quiénes somos y qué es Planazo',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Planazo permite: descubrir planes, eventos y locales gastronómicos y de entretenimiento; seguir a otras personas y a locales; publicar reseñas, comentarios y actividad social; reservar mesas en locales adheridos; comprar entradas a eventos y funciones de locales adheridos; y, para los comercios, gestionar su perfil, sus reservas, su boletería y sus publicaciones.',
      },
      {
        tipo: 'p',
        texto:
          '**Planazo es una plataforma de intermediación y descubrimiento.** No es un restaurante, un bar, un teatro, un productor de espectáculos, una agencia de viajes ni una ticketera propia. Los servicios que se reservan y las entradas que se compran son prestados y vendidos por los comercios y organizadores adheridos (los "**Locales**"), que contratan directamente con vos.',
      },
    ],
  },
  {
    id: 'aceptacion',
    titulo: 'Aceptación de estos Términos',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Al crear una cuenta, ingresar o utilizar la Plataforma de cualquier forma, aceptás estos Términos y Condiciones (los "**Términos**") en su totalidad. Si no estás de acuerdo, no utilices el Servicio.',
      },
      { tipo: 'p', texto: 'Integran estos Términos, y se consideran parte de ellos:' },
      {
        tipo: 'lista',
        items: [
          'la sección «Datos personales y privacidad», que resume el tratamiento de tus datos;',
          'la sección «Conductas prohibidas», que fija las normas de convivencia de la comunidad;',
          'la sección «Cuentas de Negocio», aplicable solo a comercios;',
          'cualquier condición particular que se muestre al contratar un producto o servicio específico.',
        ],
      },
    ],
  },
  {
    id: 'modificaciones',
    titulo: 'Modificaciones',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Podemos modificar estos Términos cuando cambien las funcionalidades, los costos o el marco normativo aplicable. Los cambios sustanciales se notificarán con **al menos diez (10) días corridos de anticipación** por correo electrónico a la dirección registrada y/o mediante un aviso destacado dentro de la Plataforma.',
      },
      {
        tipo: 'p',
        texto:
          'Si no aceptás los cambios, podés dar de baja tu cuenta antes de su entrada en vigencia. **Las operaciones ya confirmadas (reservas, compras de entradas, períodos de membresía ya abonados) se rigen por los Términos vigentes al momento de la operación.**',
      },
    ],
  },
  {
    id: 'definiciones',
    titulo: 'Definiciones',
    bloques: [
      {
        tipo: 'lista',
        items: [
          '**Usuario**: persona humana que crea una cuenta personal para usar la Plataforma.',
          '**Cuenta de Negocio**: cuenta de acceso de un comercio, que no consume el Servicio como usuario final (no compra entradas, no reseña, no sigue perfiles) y solo accede al panel de gestión.',
          '**Local**: comercio, establecimiento u organizador dado de alta en la Plataforma.',
          '**Planazo (contenido)**: publicación de un plan o evento, propia de un Local o incorporada desde fuentes públicas.',
          '**Boletería**: módulo de venta de entradas de un Local, compuesto por funciones (fecha y hora con cupo propio) y tipos de entrada.',
          '**Entrada**: derecho de acceso a una función, representado por un código QR único e intransferible.',
          '**Seña**: importe parcial que un Local puede exigir para confirmar una reserva.',
          '**Cargo de Servicio**: importe que Planazo percibe por el uso de la Plataforma en una operación.',
          '**Contenido de Usuario**: todo texto, foto, video, reseña, comentario, calificación o dato que subas o publiques.',
        ],
      },
    ],
  },
  {
    id: 'elegibilidad',
    titulo: 'Elegibilidad y edad mínima',
    bloques: [
      { tipo: 'p', texto: 'Para crear una cuenta debés tener **al menos dieciséis (16) años**.' },
      {
        tipo: 'p',
        texto:
          'Para **realizar pagos** dentro de la Plataforma —señas de reserva, compra de entradas o cualquier operación onerosa— debés ser **mayor de dieciocho (18) años** y contar con capacidad legal para contratar, o actuar con autorización expresa de tu representante legal, quien será responsable por la operación.',
      },
      {
        tipo: 'p',
        texto:
          'Determinados eventos, funciones y locales tienen **restricciones de edad propias** (por ejemplo, locales con expendio de bebidas alcohólicas o espectáculos para mayores). Esas restricciones las fija y controla el Local en el acceso, y su incumplimiento puede derivar en que se te niegue el ingreso **sin derecho a reembolso por parte de Planazo**.',
      },
      {
        tipo: 'p',
        texto:
          'Si detectamos una cuenta de una persona menor de la edad mínima, la daremos de baja y eliminaremos sus datos.',
      },
    ],
  },
  {
    id: 'cuenta-usuario',
    titulo: 'Tu cuenta de Usuario',
    bloques: [
      { tipo: 'sub', titulo: 'Registro' },
      {
        tipo: 'p',
        texto:
          'Podés registrarte con correo electrónico y contraseña, o mediante tu cuenta de Google. Al registrarte te comprometés a brindar información **veraz, exacta y actualizada**, y a mantenerla así.',
      },
      { tipo: 'sub', titulo: 'Nombre de usuario' },
      {
        tipo: 'p',
        texto:
          'El nombre de usuario (username) es único. No podés elegir uno que suplante a una persona, marca o comercio, que induzca a error o que infrinja derechos de terceros. Podemos reasignar o modificar nombres de usuario que violen esta regla o que sean objeto de un reclamo fundado de un titular marcario.',
      },
      { tipo: 'sub', titulo: 'Una cuenta por persona' },
      {
        tipo: 'p',
        texto:
          'No está permitido crear cuentas múltiples para eludir sanciones, inflar métricas, multiplicar reseñas o manipular rankings, ni vender, ceder o transferir tu cuenta.',
      },
      { tipo: 'sub', titulo: 'Perfiles privados' },
      {
        tipo: 'p',
        texto:
          'Podés configurar tu perfil como privado. En ese caso, tu actividad social (planes a los que vas, logros, listas de seguidores y seguidos) solo será visible para tus seguidores aceptados, y las solicitudes de seguimiento quedarán pendientes de tu aprobación.',
      },
      {
        tipo: 'p',
        texto:
          '**Importante:** la privacidad del perfil **no oculta las reseñas que publicaste en la ficha pública de un Local**. Las reseñas son opiniones sobre un establecimiento abierto al público y permanecen visibles en su ficha, junto con tu nombre de usuario y foto, del mismo modo que en otras plataformas de reseñas. Si no querés que una reseña sea pública, eliminala.',
      },
    ],
  },
  {
    id: 'cuentas-negocio',
    titulo: 'Cuentas de Negocio',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Esta sección se aplica exclusivamente a Locales y a quienes operan Cuentas de Negocio.',
      },
      { tipo: 'sub', titulo: 'Alta y verificación' },
      {
        tipo: 'p',
        texto:
          'El alta se solicita mediante un formulario y es **revisada manualmente** por Planazo. Podemos aprobarla, rechazarla o pedir documentación adicional, sin obligación de fundar el rechazo. Aprobada la solicitud, se envía un enlace de activación que crea la Cuenta de Negocio y la vincula al Local.',
      },
      { tipo: 'sub', titulo: 'Declaración de quien opera la cuenta' },
      {
        tipo: 'p',
        texto:
          'Quien activa y opera una Cuenta de Negocio **declara y garantiza** que está debidamente facultado para representar al Local, obligarlo contractualmente, publicar contenido en su nombre y percibir pagos por su cuenta. Planazo puede exigir en cualquier momento acreditación de esa representación (CUIT, habilitación comercial, constancia de titularidad) y suspender la cuenta hasta obtenerla.',
      },
      { tipo: 'sub', titulo: 'Obligaciones del Local' },
      { tipo: 'p', texto: 'El Local se obliga a:' },
      {
        tipo: 'lista',
        items: [
          'a) mantener actualizada su información (dirección, horarios, teléfono, fotos, precios, cupos y disponibilidad);',
          'b) **honrar toda reserva confirmada y toda entrada válida** emitida a través de la Plataforma;',
          'c) contar con las habilitaciones, seguros, autorizaciones municipales, licencias de espectáculo público y derechos de propiedad intelectual necesarios para prestar el servicio y realizar el evento que publica;',
          'd) cumplir la normativa de defensa del consumidor, lealtad comercial, publicidad, higiene, seguridad y capacidad de ocupación;',
          'e) informar de manera clara, previa y veraz sus condiciones de seña, cancelación, reprogramación, reembolso, restricción de edad y política de no-show;',
          'f) emitir la factura o comprobante fiscal correspondiente al consumidor por el servicio o la entrada vendida;',
          'g) no publicar promociones que no pueda cumplir, ni precios distintos de los efectivamente cobrados;',
          'h) atender los reclamos de los consumidores respecto de su propio servicio.',
        ],
      },
      { tipo: 'sub', titulo: 'Contenido del Local' },
      {
        tipo: 'p',
        texto:
          'El Local es exclusivo responsable de sus publicaciones, promociones, fotos, videos y descripciones de eventos, y garantiza que cuenta con los derechos para usarlos. Planazo puede despublicar contenido que considere falso, engañoso, vencido o violatorio de estos Términos.',
      },
      { tipo: 'sub', titulo: 'Reseñas sobre el Local' },
      {
        tipo: 'p',
        texto:
          'El Local **no puede** condicionar, comprar, premiar, exigir ni filtrar reseñas, ni ofrecer beneficios a cambio de calificaciones positivas, ni publicar reseñas sobre sí mismo o sobre competidores. Planazo no elimina reseñas negativas por pedido del Local ni ofrece ese servicio bajo ninguna modalidad, gratuita o paga. Sí eliminamos reseñas que violen la sección «Conductas prohibidas».',
      },
      { tipo: 'sub', titulo: 'Métricas' },
      {
        tipo: 'p',
        texto:
          'El panel de negocio muestra métricas de comportamiento **agregadas** (visualizaciones, tiempo de visualización, clics en llamadas a la acción, visitas al perfil, conversiones). Salvo los datos de contacto que el consumidor provea voluntariamente al reservar o comprar, el Local no recibe datos personales individualizados de quienes vieron su contenido sin haber interactuado con él.',
      },
    ],
  },
  {
    id: 'rol-planazo',
    titulo: 'Rol de Planazo en las operaciones',
    bloques: [
      {
        tipo: 'p',
        texto:
          '**Planazo actúa como plataforma de intermediación y como agente técnico de cobro; no es parte del contrato entre vos y el Local.**',
      },
      { tipo: 'p', texto: 'En particular:' },
      {
        tipo: 'lista',
        items: [
          'a) el contrato de consumo por la mesa reservada, la comida, la bebida, el espectáculo o la entrada se celebra **directamente entre el Usuario y el Local**;',
          'b) los pagos se procesan a través de **Mercado Pago** bajo el modelo marketplace (split de pagos): **el dinero se acredita directamente en la cuenta de Mercado Pago del Local**, y Planazo percibe únicamente su Cargo de Servicio. Planazo **no custodia, no retiene ni administra los fondos** correspondientes al Local;',
          'c) Planazo no controla ni garantiza la calidad, la seguridad, la legalidad, la puntualidad ni la efectiva realización del servicio o del evento;',
          'd) Planazo no garantiza la exactitud de la información publicada por los Locales (precios, horarios, cupos, elenco, condiciones);',
          'e) ante un incumplimiento del Local, tu reclamo principal es contra el Local. Sin perjuicio de ello, **nada de lo dispuesto en esta sección limita la responsabilidad que la Ley 24.240 de Defensa del Consumidor atribuya a Planazo en su carácter de integrante de la cadena de comercialización**, y colaboraremos activamente en la gestión de tu reclamo conforme la sección «Soporte y reclamos».',
        ],
      },
    ],
  },
  {
    id: 'reservas',
    titulo: 'Reservas',
    bloques: [
      { tipo: 'sub', titulo: 'Cómo funcionan' },
      {
        tipo: 'p',
        texto:
          'Las reservas se toman por **franjas horarias** y con **cupo por zona o sector** definidos por cada Local. Una reserva ocupa únicamente su franja. La disponibilidad que ves es la que el Local configuró y puede variar en tiempo real: **una reserva solo existe cuando el sistema la confirma** y te muestra el estado "Confirmada".',
      },
      { tipo: 'sub', titulo: 'Datos de la reserva' },
      {
        tipo: 'p',
        texto:
          'Al reservar proporcionás nombre de contacto, teléfono, cantidad de comensales y, opcionalmente, notas. Esos datos se comunican al Local para que pueda prepararla y contactarte. Sos responsable de que sean correctos.',
      },
      { tipo: 'sub', titulo: 'Seña' },
      {
        tipo: 'p',
        texto: 'El Local puede exigir una **seña** para confirmar la reserva, por monto fijo o por persona. En ese caso:',
      },
      {
        tipo: 'lista',
        items: [
          'a) el importe se te informa **antes** de pagar;',
          'b) la reserva queda en estado "Pendiente de pago" y **retiene el lugar solo de forma provisoria** hasta que Mercado Pago confirme la acreditación;',
          'c) si el pago no se acredita dentro del plazo previsto (aproximadamente treinta minutos), la reserva se cancela automáticamente y el lugar se libera;',
          'd) **la seña es del Local, no de Planazo.** Su imputación al consumo, su devolución y sus condiciones las define y ejecuta el Local, que debe informarlas antes de la operación.',
        ],
      },
      { tipo: 'sub', titulo: 'Modificación y cancelación' },
      {
        tipo: 'p',
        texto:
          'Podés modificar o cancelar tu reserva desde la app, sujeto a la disponibilidad y a la política del Local. El Local también puede cancelar o reprogramar una reserva por causas operativas (fuerza mayor, cierre imprevisto, sobreventa), en cuyo caso debe notificarte y **devolver la seña abonada**.',
      },
      { tipo: 'sub', titulo: 'Ausencia (no-show) y tolerancia' },
      {
        tipo: 'p',
        texto:
          'Si no te presentás, o lo hacés fuera de la tolerancia del Local, la reserva puede marcarse como **ausente** (no-show) y la seña puede perderse, si así lo informó el Local previamente. El registro reiterado de ausencias puede derivar en la limitación de la función de reservas en tu cuenta.',
      },
    ],
  },
  {
    id: 'entradas',
    titulo: 'Entradas y boletería',
    bloques: [
      { tipo: 'sub', titulo: 'Quién vende la entrada' },
      {
        tipo: 'p',
        texto:
          '**El vendedor y organizador es el Local.** Planazo provee la infraestructura de emisión, validación y cobro. La relación de consumo por el espectáculo se traba entre vos y el Local.',
      },
      { tipo: 'sub', titulo: 'Emisión y QR' },
      {
        tipo: 'p',
        texto:
          'Cada entrada se emite con un **código QR único, aleatorio y opaco**, asociado a tu cuenta, a una función determinada y a un tipo de entrada. Se envía a tu correo y queda disponible en "Mis entradas".',
      },
      { tipo: 'sub', titulo: 'Uso, unicidad y validación' },
      {
        tipo: 'lista',
        items: [
          'a) Cada QR **habilita un único ingreso**. El sistema lo marca como usado en el momento del escaneo, de forma atómica: un mismo código no puede validarse dos veces.',
          'b) Si compartís, publicás, capturás o duplicás tu QR y un tercero ingresa primero, **la entrada queda consumida y perdés el acceso, sin derecho a reembolso**.',
          'c) El Local puede exigir documento de identidad coincidente con el titular de la compra.',
          'd) El Local puede negar o condicionar el ingreso por razones de seguridad, capacidad, restricción etaria, estado de intoxicación o incumplimiento de su reglamento interno, conforme la normativa vigente y sin discriminación (Ley 23.592).',
        ],
      },
      { tipo: 'sub', titulo: 'Reventa prohibida' },
      {
        tipo: 'p',
        texto:
          'Está **prohibida la reventa de entradas** adquiridas en Planazo, así como su comercialización con sobreprecio, su ofrecimiento en plataformas de reventa y su adquisición mediante bots, scripts o cuentas múltiples. Detectada la infracción, podemos **anular las entradas involucradas sin reembolso** y suspender la cuenta, sin perjuicio de las acciones legales y de la normativa contravencional aplicable.',
      },
      { tipo: 'sub', titulo: 'Cancelación, reprogramación y suspensión del evento' },
      {
        tipo: 'lista',
        items: [
          'a) Si el evento se **cancela**, corresponde la devolución del valor de la entrada. La devolución la efectúa el **Local**, que recibió los fondos, por el mismo medio de pago. Planazo reintegrará el Cargo de Servicio que hubiera percibido y gestionará el reclamo ante el Local.',
          'b) Si el evento se **reprograma**, la entrada mantiene su validez para la nueva fecha. Si no podés asistir, podés solicitar la devolución al Local dentro de los **treinta (30) días corridos** de anunciada la reprogramación.',
          'c) Si el evento se **suspende parcialmente** o se altera sustancialmente (cambio de artista principal, de sede o de condiciones esenciales), aplican los mismos derechos que en el inciso b).',
          'd) Los plazos de acreditación dependen del medio de pago y del emisor de la tarjeta, y pueden extenderse hasta la liquidación del período correspondiente.',
        ],
      },
      { tipo: 'sub', titulo: 'Entradas no utilizadas' },
      {
        tipo: 'p',
        texto:
          'Fuera de los supuestos anteriores y de los derechos irrenunciables que la Ley 24.240 de Defensa del Consumidor reconoce al consumidor, **una entrada no utilizada no da derecho a devolución ni a cambio**, salvo que el Local disponga una política más favorable.',
      },
    ],
  },
  {
    id: 'pagos',
    titulo: 'Pagos, precios y comisiones',
    bloques: [
      { tipo: 'sub', titulo: 'Medio de pago' },
      {
        tipo: 'p',
        texto:
          'Los pagos se procesan mediante **Mercado Pago**. Al pagar, aceptás además los términos y las políticas de privacidad de Mercado Pago, que actúa como procesador independiente.',
      },
      { tipo: 'sub', titulo: 'Precios' },
      {
        tipo: 'p',
        texto:
          'Los precios los fija el Local y se muestran en pesos argentinos (ARS), con impuestos incluidos cuando corresponda. Antes de confirmar, se te informa el **detalle completo**: precio del ítem, Cargo de Servicio y total a pagar.',
      },
      { tipo: 'sub', titulo: 'Cargo de Servicio' },
      {
        tipo: 'p',
        texto:
          'Planazo percibe un **Cargo de Servicio** por el uso de la Plataforma, calculado como un porcentaje de la operación y **exhibido por separado antes de la confirmación**. Es la contraprestación por la intermediación, la emisión y validación de entradas, la gestión de disponibilidad y el soporte. **El Cargo de Servicio no es reembolsable**.',
      },
      { tipo: 'sub', titulo: 'Cálculo del monto' },
      {
        tipo: 'p',
        texto:
          'Todos los importes se calculan **del lado del servidor** a partir de la configuración del Local y se verifican contra lo informado por Mercado Pago antes de confirmar la operación. Ningún importe enviado desde el dispositivo del usuario se toma como válido.',
      },
      { tipo: 'sub', titulo: 'Confirmación' },
      {
        tipo: 'p',
        texto:
          'Una operación se considera confirmada **únicamente cuando el pago es aprobado y verificado por Planazo contra la API de Mercado Pago**. Un comprobante de la aplicación de pagos, una notificación push o una pantalla de "aprobado" no constituyen confirmación si el estado en Planazo no figura como confirmado. Los pagos no acreditados dentro del plazo previsto se expiran automáticamente y liberan el cupo.',
      },
      { tipo: 'sub', titulo: 'Datos de tarjeta' },
      {
        tipo: 'p',
        texto:
          '**Planazo no almacena números completos de tarjeta ni códigos de seguridad.** Los datos se tokenizan en Mercado Pago. En nuestros sistemas solo conservamos, para que puedas reconocer tu medio de pago, la **marca, los últimos cuatro dígitos y el mes/año de vencimiento**.',
      },
      { tipo: 'sub', titulo: 'Rechazos y contracargos' },
      {
        tipo: 'p',
        texto:
          'Los rechazos de pago los decide el emisor de la tarjeta o Mercado Pago; Planazo no accede a su fundamento más allá del detalle informado. En caso de **contracargo o desconocimiento de consumo**, podemos suspender la cuenta, anular las entradas o reservas asociadas y aportar a la entidad emisora los registros de la operación (fecha, IP, dispositivo, validación del QR).',
      },
      { tipo: 'sub', titulo: 'Facturación' },
      {
        tipo: 'p',
        texto:
          'La factura o comprobante fiscal por el servicio prestado o la entrada vendida la emite **el Local**. Planazo emite comprobante únicamente por su Cargo de Servicio y por la membresía.',
      },
    ],
  },
  {
    id: 'membresia',
    titulo: 'Membresía Negocio Pro (solo Locales)',
    bloques: [
      { tipo: 'sub', titulo: 'Planes' },
      {
        tipo: 'p',
        texto:
          'El plan Gratis permite publicar hasta **3 planazos por mes calendario** (mes calendario argentino) y acceder a las funciones básicas del panel. La membresía **Pro** es una **suscripción mensual con renovación automática** que habilita publicación ilimitada y las funciones adicionales que se detallen al contratar.',
      },
      {
        tipo: 'p',
        texto:
          'Publicar y despublicar un mismo planazo no restituye cupo: se computan las creaciones del mes. Editar un planazo existente no consume cupo.',
      },
      { tipo: 'sub', titulo: 'Contratación y cobro' },
      {
        tipo: 'p',
        texto:
          'Pro se contrata mediante **suscripción de Mercado Pago (débito automático)**, en la que **Planazo es el cobrador**. El correo de la cuenta de Mercado Pago con la que se paga puede ser distinto del correo de la cuenta de Planazo, y debe corresponder al titular del medio de pago.',
      },
      { tipo: 'sub', titulo: 'Prueba gratuita' },
      {
        tipo: 'p',
        texto:
          'Si se ofrece un período de prueba, se autoriza el medio de pago al inicio y **el primer cobro se efectúa automáticamente al finalizar la prueba**, salvo baja previa. Te avisaremos por correo antes de que termine. **La prueba se otorga una única vez por Local**: darse de baja y volver a suscribirse no genera una prueba nueva.',
      },
      { tipo: 'sub', titulo: 'Renovación, mora y vigencia' },
      {
        tipo: 'lista',
        items: [
          'a) La suscripción **se renueva automáticamente** cada período hasta que la des de baja.',
          'b) Los beneficios Pro se conservan hasta el **fin del período efectivamente abonado**, más un margen de gracia.',
          'c) Si un débito es rechazado, Mercado Pago realiza reintentos y te informaremos el motivo en el panel. Si transcurrido el período de gracia el cobro no se recupera, **la suscripción se da de baja** y el Local vuelve al plan Gratis.',
          'd) Volver al plan Gratis **no elimina** el contenido ya publicado, pero puede limitar nuevas publicaciones al cupo del plan.',
        ],
      },
      { tipo: 'sub', titulo: 'Baja' },
      {
        tipo: 'p',
        texto:
          'Podés dar de baja la suscripción en cualquier momento desde el panel de negocio, mediante el **"Botón de Baja"** exigido por la **Disposición 3/2026** de la Subsecretaría de Defensa del Consumidor y Lealtad Comercial, o escribiendo a soporte@planazoco.ar. La baja se hace efectiva de inmediato a los fines de la renovación: **no se cobra el período siguiente y conservás Pro hasta el fin del período ya abonado**. La constancia de baja se envía dentro de las 24 horas.',
      },
      { tipo: 'sub', titulo: 'Cambios de precio' },
      {
        tipo: 'p',
        texto:
          'Los cambios de precio se notifican con **al menos treinta (30) días corridos de anticipación** y rigen a partir del ciclo siguiente. Si no los aceptás, podés dar de baja antes de esa fecha.',
      },
    ],
  },
  {
    id: 'tu-contenido',
    titulo: 'Tu contenido',
    bloques: [
      { tipo: 'sub', titulo: 'Titularidad' },
      { tipo: 'p', texto: '**El Contenido de Usuario sigue siendo tuyo.** No adquirimos su propiedad.' },
      { tipo: 'sub', titulo: 'Licencia que nos otorgás' },
      {
        tipo: 'p',
        texto:
          'Al publicar Contenido de Usuario, otorgás a Planazo una licencia **no exclusiva, gratuita, mundial, transferible y sublicenciable** para alojar, almacenar, reproducir, adaptar técnicamente (redimensionar, comprimir, transcodificar, generar miniaturas), traducir, publicar, exhibir y distribuir ese contenido **con la finalidad de operar, promocionar y mejorar el Servicio**, incluyendo su exhibición en la ficha del Local reseñado, en el feed, en rankings y en piezas de difusión de la Plataforma.',
      },
      {
        tipo: 'p',
        texto:
          'Esta licencia **subsiste mientras el contenido esté publicado** y se extingue —salvo por copias de resguardo y por el contenido que otros usuarios hayan compartido o citado— cuando lo eliminás o das de baja tu cuenta. A diferencia de otras plataformas del rubro, **no reclamamos una licencia perpetua e irrevocable ni te exigimos renunciar a tus derechos morales de autor**, que conforme la Ley 11.723 son irrenunciables.',
      },
      { tipo: 'sub', titulo: 'Tus garantías' },
      {
        tipo: 'p',
        texto:
          'Garantizás que sos titular del contenido o que contás con los derechos necesarios, y que su publicación no infringe derechos de terceros, no viola la ley ni estos Términos. Sos el único responsable por él.',
      },
      { tipo: 'sub', titulo: 'Reseñas' },
      {
        tipo: 'p',
        texto:
          'Las reseñas deben reflejar una **experiencia personal, real y de primera mano**. Se aplica íntegramente la sección «Conductas prohibidas». Podés editar o eliminar tus reseñas; la reputación agregada del Local se recalcula en consecuencia.',
      },
      { tipo: 'sub', titulo: 'Sugerencias' },
      {
        tipo: 'p',
        texto:
          'Si nos enviás ideas, sugerencias o propuestas de mejora, podemos usarlas libremente y sin compensación, sin que ello genere relación de confidencialidad ni derecho a retribución.',
      },
    ],
  },
  {
    id: 'conductas-prohibidas',
    titulo: 'Conductas prohibidas',
    bloques: [
      { tipo: 'p', texto: 'Está prohibido, entre otras conductas:' },
      {
        tipo: 'lista',
        items: [
          'Publicar reseñas falsas, pagadas, intercambiadas, incentivadas o escritas por terceros; reseñar el negocio propio, el de un familiar, el de un empleador o el de un competidor.',
          'Publicar contenido difamatorio, injurioso, discriminatorio, violento, sexual explícito, que promueva actividades ilegales o que exponga datos personales de terceros (doxxing).',
          'Acosar, amenazar, hostigar o suplantar la identidad de otra persona, marca o comercio.',
          'Manipular métricas, rankings, logros, likes, cantidad de seguidores o disponibilidad mediante cuentas falsas, coordinación o automatización.',
          'Realizar reservas ficticias, masivas o especulativas, o bloquear cupos sin intención de asistir.',
          'Adquirir entradas mediante bots, scripts o cuentas múltiples, o revenderlas.',
          'Extraer datos de la Plataforma mediante scraping, crawling, ingeniería inversa, minado o acceso automatizado no autorizado; usar el contenido de la Plataforma para entrenar modelos de inteligencia artificial.',
          'Vulnerar, sondear o eludir medidas de seguridad, autenticación, límites de uso o mecanismos de validación de entradas.',
          'Interferir con el funcionamiento del Servicio, introducir malware o generar carga desproporcionada sobre la infraestructura.',
          'Usar la Plataforma con fines publicitarios no autorizados, spam o esquemas comerciales ajenos a su finalidad.',
          'Utilizar el Servicio infringiendo cualquier ley aplicable.',
        ],
      },
    ],
  },
  {
    id: 'contenido-terceros',
    titulo: 'Contenido de terceros y planes provenientes de fuentes públicas',
    bloques: [
      { tipo: 'sub', titulo: 'Planes de otras ticketeras y agendas culturales' },
      {
        tipo: 'p',
        texto:
          'Parte de los planes que se muestran en Planazo **no son organizados ni vendidos por Locales adheridos**: provienen de información que ticketeras, salas y agendas culturales **publican abiertamente** en sus sitios (por ejemplo, mediante marcado estructurado schema.org/Event o las interfaces públicas que alimentan sus propios sitios), incluyendo, entre otras, Alpogo, Entrada Uno, Edén Entradas, Ticketek, Livepass, Entradafan y Norteticket.',
      },
      { tipo: 'p', texto: 'Respecto de ese contenido:' },
      {
        tipo: 'lista',
        items: [
          'a) Planazo actúa como **referencia y enlace a la fuente original**: mostramos la ficha del plan y te derivamos al sitio del organizador o de la ticketera para comprar.',
          'b) **La compra se realiza íntegramente en el sitio del tercero**, bajo sus términos, sus precios y sus políticas de reembolso. Planazo no interviene, no cobra, no emite la entrada ni tiene acceso a la operación.',
          'c) La información (fecha, hora, sala, precio desde, foto, categoría) **puede estar incompleta, desactualizada o haber cambiado**. Algunos planes se muestran sin fecha porque la fuente no la publica. Verificá siempre los datos en el sitio de origen antes de comprar.',
          'd) **No existe relación de afiliación, patrocinio, representación ni sociedad** entre Planazo y esas empresas. Las marcas y logotipos pertenecen a sus titulares y se usan de forma nominativa y descriptiva, para identificar la fuente.',
          'e) Todo plan incorporado por esta vía es **revisado y aprobado individualmente por una persona** antes de publicarse; ninguno se publica de forma automática. Si sos titular de un contenido y no querés que aparezca en Planazo, escribinos a **contacto@planazoco.ar** y lo retiraremos.',
        ],
      },
      { tipo: 'sub', titulo: 'Información de Google' },
      {
        tipo: 'p',
        texto:
          'Las fichas de locales pueden incluir datos provenientes de **Google Maps / Google Places** (dirección, horarios, fotos, calificación y cantidad de reseñas de Google). Esa información pertenece a Google y a sus usuarios, se muestra con la atribución correspondiente y **se distingue explícitamente de la calificación propia de Planazo**, que se calcula solo con reseñas de nuestra comunidad. Planazo no responde por su exactitud. El uso de esos datos está sujeto además a los términos de Google.',
      },
      { tipo: 'sub', titulo: 'Enlaces externos' },
      {
        tipo: 'p',
        texto:
          'La Plataforma contiene enlaces a sitios de terceros que no controlamos. No respondemos por su contenido, sus prácticas de privacidad ni sus productos.',
      },
    ],
  },
  {
    id: 'moderacion',
    titulo: 'Moderación, denuncias y propiedad intelectual',
    bloques: [
      { tipo: 'sub', titulo: 'Moderación' },
      {
        tipo: 'p',
        texto:
          'Podemos revisar, despublicar, ocultar o eliminar contenido que infrinja estos Términos o la sección «Conductas prohibidas», y suspender o dar de baja cuentas. En la medida de lo posible te informaremos el motivo y podrás presentar un descargo a **soporte@planazoco.ar**. **No tenemos obligación general de monitorear** el contenido publicado por los usuarios.',
      },
      { tipo: 'sub', titulo: 'Denuncias' },
      {
        tipo: 'p',
        texto:
          'Cualquier persona puede denunciar contenido a través de la herramienta de reporte de la app o escribiendo a **soporte@planazoco.ar**, indicando la URL o ubicación del contenido, el motivo y sus datos de contacto.',
      },
      { tipo: 'sub', titulo: 'Propiedad intelectual de terceros' },
      {
        tipo: 'p',
        texto:
          'Ante una **notificación fehaciente y suficientemente fundada** de infracción de derechos de autor o marcarios, procederemos a bloquear o retirar el contenido conforme la Ley 11.723 y la doctrina de la Corte Suprema en materia de responsabilidad de intermediarios de Internet. La notificación debe contener: identificación del titular y acreditación de su legitimación; identificación precisa del contenido y su ubicación; declaración de buena fe; y datos de contacto. El usuario afectado podrá presentar una contranotificación.',
      },
      { tipo: 'sub', titulo: 'Reincidencia' },
      {
        tipo: 'p',
        texto: 'Las cuentas con infracciones reiteradas a derechos de terceros serán dadas de baja.',
      },
    ],
  },
  {
    id: 'datos-personales',
    titulo: 'Datos personales y privacidad',
    bloques: [
      {
        tipo: 'p',
        texto:
          'El tratamiento de datos personales se rige por esta sección, conforme la **Ley 25.326 de Protección de los Datos Personales** y su reglamentación. En síntesis:',
      },
      {
        tipo: 'p',
        texto:
          '**Qué tratamos:** datos de identificación y contacto (correo, nombre, nombre de usuario, foto, descripción, país); datos de preferencias (gustos, zona); **datos de geolocalización** (zona y coordenadas aproximadas, para mostrarte planes cercanos, solo con tu permiso y revocables desde el sistema operativo); contenido que publicás; datos de las operaciones (reservas, entradas, importes, estado de pago) y metadatos no sensibles del medio de pago (marca, últimos cuatro dígitos, vencimiento); **datos de comportamiento en la aplicación** (qué planes viste, cuánto tiempo, qué tocaste, qué guardaste o compartiste); datos técnicos (dispositivo, versión, identificadores de sesión); y las comunicaciones que nos envíes por soporte.',
      },
      {
        tipo: 'p',
        texto:
          '**Para qué:** prestar el Servicio (base: ejecución del contrato); procesar pagos y prevenir fraude; **personalizar el feed y las recomendaciones**; generar métricas agregadas para los Locales; enviar notificaciones sobre tu actividad y tus operaciones; cumplir obligaciones legales y fiscales.',
      },
      {
        tipo: 'p',
        texto:
          '**Con quién los compartimos:** con el **Local** correspondiente, únicamente los datos necesarios para prestar el servicio que contrataste (nombre, teléfono, cantidad de comensales, notas de la reserva; nombre y correo del comprador de entradas); con **Mercado Pago** para procesar los pagos; con proveedores de infraestructura, almacenamiento de imágenes y envío de correo, en carácter de encargados de tratamiento; y con autoridades competentes cuando exista requerimiento legal. **No vendemos datos personales.**',
      },
      {
        tipo: 'p',
        texto:
          '**Cuánto tiempo:** mientras la cuenta esté activa, y luego durante los plazos de prescripción y de conservación fiscal y contable aplicables (en general, diez años para la información de operaciones). Los registros de comportamiento se purgan periódicamente.',
      },
      {
        tipo: 'p',
        texto:
          '**Tus derechos:** podés solicitar en cualquier momento el **acceso, la rectificación, la actualización y la supresión** de tus datos escribiendo a **soporte@planazoco.ar**. El titular de los datos personales tiene derecho a solicitar el retiro o bloqueo de su nombre de los bancos de datos. El acceso es gratuito a intervalos no inferiores a seis meses y debe responderse dentro de los diez días corridos. La **Agencia de Acceso a la Información Pública** es el órgano de control de la Ley 25.326 y atiende las denuncias por incumplimiento.',
      },
      {
        tipo: 'p',
        texto:
          '**Eliminación de cuenta:** podés eliminar tu cuenta desde la aplicación o solicitándolo a **soporte@planazoco.ar**. Al hacerlo se eliminan tu perfil, tus reseñas, tus publicaciones y tus datos de actividad. Se conservan, disociados o por obligación legal: los registros de operaciones de pago, las entradas emitidas y las reservas, por el plazo fiscal correspondiente.',
      },
    ],
  },
  {
    id: 'comunicaciones',
    titulo: 'Comunicaciones y notificaciones',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Al registrarte aceptás recibir comunicaciones **transaccionales** (confirmaciones de reserva y compra, entradas, avisos de pago, alertas de seguridad, cambios en estos Términos), que son inherentes al Servicio y no pueden desactivarse mientras mantengas la cuenta.',
      },
      {
        tipo: 'p',
        texto:
          'Las **notificaciones sociales** (seguidores, likes, comentarios, logros) y las **comunicaciones comerciales** pueden configurarse o desactivarse desde la app y desde los ajustes del sistema operativo. Todo correo comercial incluye un mecanismo de baja, conforme el artículo 27 de la Ley 25.326.',
      },
      {
        tipo: 'p',
        texto:
          'Las notificaciones que te enviemos al correo registrado se consideran válidamente efectuadas. Es tu responsabilidad mantener esa dirección actualizada y revisarla.',
      },
    ],
  },
  {
    id: 'soporte',
    titulo: 'Soporte y reclamos',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Podés escribirnos desde la sección de Ayuda de la aplicación o a **soporte@planazoco.ar**. Respondemos dentro de los **2 días hábiles**.',
      },
      {
        tipo: 'p',
        texto:
          'Si tu reclamo es sobre el servicio de un Local (calidad, cumplimiento, cobro, acceso), intervendremos como intermediarios para facilitar su resolución, sin que ello implique asumir la obligación principal del Local.',
      },
      {
        tipo: 'p',
        texto:
          '**Vías administrativas:** como consumidor podés iniciar tu reclamo ante la **Ventanilla Única Federal de Defensa del Consumidor** (consumidor.gob.ar), ante el organismo local de defensa del consumidor de tu jurisdicción, o ante el **Servicio de Conciliación Previa en las Relaciones de Consumo (COPREC)**. Estos Términos no restringen de modo alguno esas vías.',
      },
    ],
  },
  {
    id: 'disponibilidad',
    titulo: 'Disponibilidad del Servicio',
    bloques: [
      {
        tipo: 'p',
        texto:
          'El Servicio se presta "**tal como está**" y "**según disponibilidad**". No garantizamos operación ininterrumpida, libre de errores o de fallas, ni la compatibilidad con todo dispositivo o versión de sistema operativo. Podemos realizar tareas de mantenimiento, modificar, suspender o discontinuar funcionalidades. Si discontinuamos una funcionalidad paga, se reintegrará la parte proporcional no utilizada.',
      },
      {
        tipo: 'p',
        texto:
          'Determinadas funciones dependen de servicios de terceros (Mercado Pago, Google, proveedores de infraestructura y correo): su indisponibilidad puede afectar temporalmente el Servicio.',
      },
    ],
  },
  {
    id: 'suspension-baja',
    titulo: 'Suspensión y baja',
    bloques: [
      {
        tipo: 'p',
        texto:
          '**Vos** podés dejar de usar el Servicio y eliminar tu cuenta en cualquier momento. La baja no te exime de las obligaciones asumidas antes de ella (reservas pendientes, períodos de membresía en curso).',
      },
      {
        tipo: 'p',
        texto:
          '**Nosotros** podemos suspender o dar de baja tu cuenta, con aviso previo cuando sea razonablemente posible, si: infringís estos Términos o la sección «Conductas prohibidas»; usás el Servicio de manera fraudulenta o para dañar a terceros o a la Plataforma; generás contracargos injustificados; o existe una orden de autoridad competente. En casos de riesgo grave, fraude o seguridad, la suspensión puede ser inmediata.',
      },
      {
        tipo: 'p',
        texto:
          'Dada de baja una Cuenta de Negocio, el Local debe **honrar todas las reservas y entradas ya emitidas**.',
      },
    ],
  },
  {
    id: 'responsabilidad',
    titulo: 'Garantías y responsabilidad',
    bloques: [
      { tipo: 'sub', titulo: 'Alcance' },
      {
        tipo: 'p',
        texto:
          'En la máxima medida permitida por la ley, Planazo no garantiza: la exactitud de la información publicada por Locales o proveniente de fuentes de terceros; la calidad, seguridad o legalidad de los servicios de los Locales; la realización efectiva de un evento; ni la conducta de otros usuarios dentro o fuera de la Plataforma.',
      },
      { tipo: 'sub', titulo: 'Exclusiones' },
      {
        tipo: 'p',
        texto:
          'Planazo no responde por: daños derivados del hecho de un tercero, del propio damnificado o de caso fortuito o fuerza mayor; el incumplimiento de un Local respecto de su propio servicio; los daños ocurridos en el establecimiento del Local o durante un evento; las operaciones realizadas en sitios de terceros a los que la Plataforma enlaza; el uso indebido, la pérdida o la divulgación de tu código QR o de tus credenciales por causas que te sean imputables.',
      },
      { tipo: 'sub', titulo: 'Límite' },
      {
        tipo: 'p',
        texto:
          'En la medida en que la ley lo permita, la responsabilidad total de Planazo frente a un Usuario por cualquier reclamo vinculado al Servicio se limita al **mayor** de: (i) los importes efectivamente percibidos por Planazo de ese Usuario en concepto de Cargos de Servicio y membresía en los doce meses anteriores al hecho, o (ii) el valor de la operación que originó el reclamo. No respondemos por lucro cesante, pérdida de chance, daños indirectos o pérdida de datos.',
      },
      { tipo: 'sub', titulo: 'Salvedad de orden público' },
      {
        tipo: 'p',
        texto:
          '**Nada de lo previsto en esta sección limita, excluye ni restringe los derechos irrenunciables que la Ley 24.240 de Defensa del Consumidor, el Código Civil y Comercial y demás normas de orden público reconocen a los consumidores, ni la responsabilidad por dolo o culpa grave.** Toda cláusula que resultara abusiva conforme el artículo 37 de la Ley 24.240 se tendrá por no escrita, sin afectar la validez del resto.',
      },
    ],
  },
  {
    id: 'indemnidad',
    titulo: 'Indemnidad',
    bloques: [
      {
        tipo: 'p',
        texto:
          'Te comprometés a mantener indemne a Planazo, sus socios, directores y empleados frente a reclamos de terceros —incluidos honorarios razonables de defensa— originados en: tu Contenido de Usuario; tu incumplimiento de estos Términos o de la ley; y, en el caso de los Locales, el servicio prestado, el evento realizado, la publicidad difundida y las obligaciones fiscales, laborales o de habilitación a su cargo. Esta obligación **no se aplica al consumidor** respecto de reclamos derivados del uso normal del Servicio.',
      },
    ],
  },
  {
    id: 'propiedad-intelectual',
    titulo: 'Propiedad intelectual de Planazo',
    bloques: [
      {
        tipo: 'p',
        texto:
          'La marca "Planazo", su logotipo, el diseño, el software, el código fuente, las bases de datos, la selección y disposición de contenidos, los sistemas de logros y ranking y todo elemento de la Plataforma son de titularidad de Planazo o de sus licenciantes, y están protegidos por las leyes 11.723 y 22.362.',
      },
      {
        tipo: 'p',
        texto:
          'Te otorgamos una licencia **personal, limitada, revocable, intransferible y no exclusiva** para usar la aplicación conforme a estos Términos. No podés copiar, modificar, distribuir, descompilar, crear obras derivadas ni explotar comercialmente la Plataforma sin autorización escrita.',
      },
    ],
  },
  {
    id: 'disposiciones-generales',
    titulo: 'Disposiciones generales',
    bloques: [
      {
        tipo: 'lista',
        items: [
          '**Independencia de las cláusulas.** La nulidad de una cláusula no afecta la validez de las restantes.',
          '**No renuncia.** La tolerancia frente a un incumplimiento no implica renuncia a exigirlo en el futuro.',
          '**Cesión.** No podés ceder tu posición contractual. Planazo puede cederla en caso de reorganización societaria, fusión o transferencia de fondo de comercio, notificándolo previamente.',
          '**Integridad.** Estos Términos, junto con los documentos que los integran, constituyen el acuerdo completo entre las partes y sustituyen todo entendimiento anterior sobre la materia.',
          '**Independencia de las partes.** Nada en estos Términos crea una relación laboral, societaria, de agencia ni de franquicia entre Planazo y los Usuarios o los Locales.',
          '**Idioma.** La versión en español es la única con valor legal.',
        ],
      },
    ],
  },
  {
    id: 'jurisdiccion',
    titulo: 'Ley aplicable y jurisdicción',
    bloques: [
      { tipo: 'p', texto: 'Estos Términos se rigen por las leyes de la **República Argentina**.' },
      {
        tipo: 'p',
        texto:
          '**Consumidores:** toda controversia se someterá a los tribunales competentes del **domicilio real del consumidor**, conforme el artículo 36 de la Ley 24.240, siendo nula toda prórroga de jurisdicción en su perjuicio. **No se impone arbitraje obligatorio ni renuncia a acciones colectivas.**',
      },
      {
        tipo: 'p',
        texto:
          '**Locales y Cuentas de Negocio:** las controversias se someterán a los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires, con renuncia a todo otro fuero o jurisdicción.',
      },
    ],
  },
  {
    id: 'contacto',
    titulo: 'Contacto',
    bloques: [
      {
        tipo: 'p',
        texto: 'Soporte: **soporte@planazoco.ar** · Contacto: **contacto@planazoco.ar**',
      },
    ],
  },
];

/**
 * Parte un texto con marcas **negrita** en tramos. Devuelve pares
 * { texto, fuerte } en orden, listos para pintar sin regex en el render.
 */
export function partirNegritas(texto: string): { texto: string; fuerte: boolean }[] {
  // El índice se calcula ANTES de descartar los vacíos: si el párrafo arranca
  // con **negrita**, split deja un '' al principio y filtrar primero correría
  // la paridad, dejando en redonda justo lo que va en negrita.
  return texto
    .split('**')
    .map((t, i) => ({ texto: t, fuerte: i % 2 === 1 }))
    .filter(p => p.texto.length > 0);
}
