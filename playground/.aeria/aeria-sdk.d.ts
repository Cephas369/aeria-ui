import type {
  InferProperty,
  InferResponse,
  SchemaWithId,
  MakeEndpoint,
  RequestMethod,
  CollectionFunctionsSDK

} from '@aeriajs/types'

declare type MirrorDescriptions = {
  "file": {
    "$id": "file",
    "icon": "paperclip",
    "owned": "always",
    "presets": [
      "owned"
    ],
    "indexes": [
      "name",
      "link",
      "type"
    ],
    "properties": {
      "type": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "last_modified": {
        "type": "string",
        "format": "date-time"
      },
      "name": {
        "type": "string"
      },
      "absolute_path": {
        "type": "string"
      },
      "relative_path": {
        "type": "string"
      },
      "immutable": {
        "type": "boolean"
      },
      "link": {
        "readOnly": true
      },
      "download_link": {
        "readOnly": true
      },
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "actions": {
      "deleteAll": {
        "label": "Remover",
        "ask": true,
        "selection": true
      }
    },
    "individualActions": {
      "remove": {
        "label": "Remover",
        "icon": "trash",
        "ask": true
      }
    }
  },
  "log": {
    "$id": "log",
    "icon": "magnifying-glass",
    "required": [
      "context",
      "message"
    ],
    "properties": {
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "context": {
        "type": "string"
      },
      "message": {
        "type": "string"
      },
      "details": {
        "type": "object",
        "variable": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "view"
    ],
    "filters": [
      "context",
      "message",
      "owner"
    ],
    "individualActions": {
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  },
  "resourceUsage": {
    "$id": "resourceUsage",
    "icon": "wrench",
    "required": [
      "usage"
    ],
    "properties": {
      "user": {
        "$ref": "user",
        "indexes": [
          "name"
        ]
      },
      "address": {
        "type": "string"
      },
      "usage": {
        "type": "object",
        "additionalProperties": {
          "type": "object",
          "properties": {
            "hits": {
              "type": "integer"
            },
            "points": {
              "type": "integer"
            },
            "last_reach": {
              "type": "string",
              "format": "date-time"
            },
            "last_maximum_reach": {
              "type": "string",
              "format": "date-time"
            }
          }
        }
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "tempFile": {
    "$id": "tempFile",
    "icon": "file",
    "hidden": true,
    "temporary": {
      "index": "created_at",
      "expireAfterSeconds": 3600
    },
    "properties": {
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "absolute_path": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "mime": {
        "type": "number"
      },
      "collection": {
        "type": "string"
      },
      "filename": {
        "type": "string"
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "broadcast": {
    "$id": "broadcast",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "funnel": {
        "description": "Funil",
        "$ref": "funnel",
        "indexes": [
          "active",
          "target",
          "product_plan",
          "product",
          "event",
          "attendants",
          "tags",
          "current_attendant",
          "messages",
          "delay_duration",
          "delay_unit",
          "work_time",
          "start_time",
          "end_time"
        ]
      },
      "csv": {
        "description": "Arquivo CSV",
        "$ref": "file",
        "accept": [
          "text/csv"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "share",
    "presets": [
      "view"
    ],
    "table": [
      "name"
    ],
    "form": [
      "name",
      "funnel",
      "csv"
    ],
    "filters": [
      "name"
    ],
    "individualActions": {
      "edit": {
        "icon": "pencil-simple",
        "label": "Editar",
        "button": true,
        "route": {
          "name": "/creation/broadcast/[id]",
          "fetchItem": true,
          "clearItem": true
        }
      },
      "createTask": {
        "icon": "clipboard",
        "label": "Criar tarefa",
        "requires": [
          "_id",
          "funnel",
          "csv",
          "name"
        ]
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    },
    "search": {
      "placeholder": "Pesquise aqui pelo nome do broadcast",
      "indexes": [
        "name"
      ]
    }
  },
  "conversationTag": {
    "$id": "conversationTag",
    "icon": "tag",
    "indexes": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "color": {
        "translate": true,
        "enum": [
          "yellow",
          "blue",
          "red",
          "purple"
        ]
      },
      "description": {
        "type": "string"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "table": [
      "name",
      "color",
      "description"
    ],
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "customer": {
    "$id": "customer",
    "required": [
      "name"
    ],
    "properties": {
      "integrations": {
        "description": "Integração",
        "$ref": "integration",
        "indexes": [
          "formatted_name"
        ]
      },
      "name": {
        "description": "Nome completo",
        "type": "string"
      },
      "document_type": {
        "description": "Tipo do documento",
        "type": "string"
      },
      "document": {
        "description": "CPF",
        "type": "string",
        "mask": "###.###.###-##"
      },
      "document_alt": {
        "description": "RG",
        "type": "string"
      },
      "birthday": {
        "description": "Data de nascimento",
        "type": "string",
        "mask": "##/##/####"
      },
      "phone_area": {
        "description": "Código de área",
        "type": "number"
      },
      "phone": {
        "description": "Telefone",
        "type": "string",
        "mask": "#####-####"
      },
      "email": {
        "description": "Endereço de e-mail",
        "type": "string"
      },
      "address": {
        "$ref": "geolocation",
        "description": "Endereço",
        "indexes": [
          "address_line"
        ]
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "user-circle",
    "table": [
      "name",
      "document",
      "email",
      "phone",
      "integrations"
    ],
    "filters": [
      "name",
      "document",
      "integrations",
      "email",
      "phone"
    ],
    "actions": {}
  },
  "funnel": {
    "$id": "funnel",
    "required": [
      "attendants"
    ],
    "freshItem": {
      "delay_duration": 20,
      "delay_unit": "seconds"
    },
    "properties": {
      "active": {
        "description": "Ativo",
        "type": "boolean",
        "default": true
      },
      "target": {
        "description": "Alvo",
        "element": "select",
        "enum": [
          "product",
          "productPlan"
        ],
        "translate": true
      },
      "product_plan": {
        "description": "Plano",
        "$ref": "productPlan",
        "indexes": [
          "name"
        ]
      },
      "product": {
        "description": "Produto",
        "$ref": "product",
        "indexes": [
          "name"
        ]
      },
      "event": {
        "description": "Evento",
        "element": "select",
        "translate": true,
        "enum": [
          "order:paid",
          "order:canceled",
          "order:pix_created",
          "order:billet_created",
          "order:billet_expiring",
          "cart:reminder",
          "transaction:payment_refused"
        ]
      },
      "attendants": {
        "description": "Atendentes",
        "type": "array",
        "items": {
          "$ref": "user",
          "indexes": [
            "name",
            "email"
          ]
        }
      },
      "tags": {
        "type": "array",
        "items": {
          "$ref": "conversationTag",
          "indexes": [
            "name"
          ]
        }
      },
      "current_attendant": {
        "description": "Usuário atual para atribuir",
        "type": "number",
        "default": 0
      },
      "index_indentifier": {
        "readOnly": true
      },
      "messages": {
        "description": "Mensagens",
        "items": {
          "$ref": "funnelMessage",
          "indexes": [
            "label",
            "media_type",
            "text",
            "audio",
            "image",
            "next_messages",
            "delay",
            "wait_for_reply",
            "delay_duration",
            "delay_unit",
            "no_reply_action",
            "position_x",
            "position_y",
            "send_invoice"
          ],
          "populate": [
            "label",
            "media_type",
            "text",
            "audio",
            "image",
            "next_messages",
            "delay",
            "wait_for_reply",
            "delay_duration",
            "delay_unit",
            "no_reply_action",
            "position_x",
            "position_y",
            "send_invoice"
          ]
        },
        "type": "array"
      },
      "delay_duration": {
        "description": "Intervalo entre broadcast",
        "type": "number",
        "default": 20
      },
      "delay_unit": {
        "description": "Tempo",
        "element": "select",
        "enum": [
          "hours",
          "minutes",
          "seconds",
          "days"
        ],
        "default": "seconds",
        "translate": true
      },
      "work_time": {
        "description": "Periodo de operação",
        "type": "boolean",
        "default": false
      },
      "start_time": {
        "description": "Horário inicial de operação",
        "type": "string",
        "inputType": "time"
      },
      "end_time": {
        "description": "Horário final de operação",
        "type": "string",
        "inputType": "time"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "user-circle",
    "presets": [
      "view"
    ],
    "formLayout": {
      "fields": {
        "delay_time": {
          "span": 3
        },
        "delay_time_type": {
          "span": 3
        },
        "product": {
          "if": {
            "operator": "equal",
            "term1": "target",
            "term2": "product"
          }
        },
        "product_plan": {
          "if": {
            "operator": "equal",
            "term1": "target",
            "term2": "productPlan"
          }
        },
        "start_time": {
          "if": {
            "operator": "equal",
            "term1": "work_time",
            "term2": true
          }
        },
        "end_time": {
          "if": {
            "operator": "equal",
            "term1": "work_time",
            "term2": true
          }
        }
      }
    },
    "individualActions": {
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  },
  "funnelExecution": {
    "$id": "funnelExecution",
    "required": [
      "customer_phone",
      "funnel",
      "attendant"
    ],
    "properties": {
      "funnel": {
        "description": "Funil",
        "$ref": "funnel",
        "indexes": [
          "name"
        ]
      },
      "attendant": {
        "description": "Atendente",
        "$ref": "user",
        "indexes": [
          "name"
        ]
      },
      "customer_name": {
        "description": "Nome do cliente",
        "type": "string"
      },
      "customer_phone": {
        "description": "Telefone do cliente",
        "type": "string"
      },
      "variables": {
        "description": "Variáveis",
        "type": "object",
        "variable": true
      },
      "failure_reason": {
        "description": "Razão da falha",
        "type": "string"
      },
      "status": {
        "description": "Status",
        "translate": true,
        "enum": [
          "complete",
          "failed",
          "running",
          "paused",
          "waiting_start",
          "waiting_user_response",
          "waiting_user_answer"
        ]
      },
      "steps": {
        "description": "Passos",
        "type": "object",
        "variable": true
      },
      "customer": {
        "description": "Cliente",
        "readOnly": true
      },
      "tags": {
        "type": "array",
        "items": {
          "$ref": "conversationTag",
          "indexes": [
            "name"
          ]
        }
      },
      "chat_status": {
        "description": "Status do atendimento",
        "enum": [
          "open",
          "closed"
        ],
        "default": "open"
      },
      "converted_sale": {
        "description": "Venda convertida",
        "type": "boolean",
        "default": false
      },
      "current_queue": {
        "description": "Fila atual",
        "type": "string"
      },
      "job_id": {
        "description": "ID do job",
        "type": "string"
      },
      "job_opts": {
        "description": "opts",
        "type": "object",
        "variable": true
      },
      "external_message": {
        "type": "boolean"
      },
      "created_at": {
        "description": "Criado em",
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "description": "Atualizado em",
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      }
    },
    "presets": [
      "view"
    ],
    "tableMeta": [
      "customer"
    ],
    "individualActions": {
      "route:/dashboard/conversation-[id]": {
        "icon": "phone",
        "label": "Abrir Whatsapp",
        "fetchItem": true,
        "clearItem": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  },
  "funnelMessage": {
    "$id": "funnelMessage",
    "required": [
      "next_messages"
    ],
    "properties": {
      "text": {
        "description": "Texto",
        "type": "string",
        "element": "textarea"
      },
      "send_invoice": {
        "description": "Enviar boleto",
        "type": "boolean"
      },
      "media_type": {
        "description": "Tipo de midia",
        "translate": true,
        "element": "select",
        "enum": [
          "none",
          "audio",
          "image"
        ]
      },
      "audio": {
        "description": "Audio",
        "$ref": "file",
        "accept": [
          "audio/mpeg",
          "audio/mp4",
          "audio/ogg"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "image": {
        "description": "Imagem",
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "next_messages": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "answers": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "target": {
              "type": "string"
            }
          }
        }
      },
      "delay": {
        "description": "Delay",
        "type": "boolean",
        "default": false
      },
      "wait_for_reply": {
        "description": "Caso o usuário não responder",
        "type": "boolean",
        "default": false
      },
      "delay_duration": {
        "description": "Delay",
        "type": "number",
        "default": 0
      },
      "delay_unit": {
        "description": "Tipo de tempo",
        "element": "select",
        "translate": true,
        "enum": [
          "hours",
          "minutes",
          "seconds",
          "days"
        ],
        "default": "minutes"
      },
      "no_reply_action": {
        "description": "Ação a tomar",
        "element": "select",
        "translate": true,
        "enum": [
          "abort",
          "send_anyway"
        ],
        "default": "abort"
      },
      "position_x": {
        "description": "Posição X",
        "type": "number"
      },
      "position_y": {
        "description": "Posição Y",
        "type": "number"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "link",
    "presets": [
      "crud",
      "view"
    ],
    "form": [
      "text",
      "delay",
      "wait_for_reply",
      "no_reply_action",
      "delay_duration",
      "delay_unit",
      "send_invoice",
      "media_type",
      "image",
      "audio"
    ],
    "formLayout": {
      "fields": {
        "audio": {
          "if": {
            "operator": "equal",
            "term1": "media_type",
            "term2": "audio"
          }
        },
        "image": {
          "if": {
            "operator": "equal",
            "term1": "media_type",
            "term2": "image"
          }
        },
        "delay_unit": {
          "span": 3,
          "if": {
            "or": [
              {
                "operator": "equal",
                "term1": "wait_for_reply",
                "term2": true
              },
              {
                "operator": "equal",
                "term1": "delay",
                "term2": true
              }
            ]
          }
        },
        "delay_duration": {
          "span": 3,
          "if": {
            "or": [
              {
                "operator": "equal",
                "term1": "wait_for_reply",
                "term2": true
              },
              {
                "operator": "equal",
                "term1": "delay",
                "term2": true
              }
            ]
          }
        },
        "no_reply_action": {
          "span": 2,
          "if": {
            "operator": "equal",
            "term1": "wait_for_reply",
            "term2": true
          }
        }
      }
    },
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "geolocation": {
    "$id": "geolocation",
    "required": [
      "city",
      "address",
      "number",
      "district",
      "zipcode"
    ],
    "properties": {
      "city": {
        "description": "Cidade",
        "type": "string"
      },
      "state": {
        "description": "UF",
        "type": "string"
      },
      "address": {
        "description": "Endereço",
        "type": "string"
      },
      "number": {
        "description": "Número",
        "type": "string"
      },
      "district": {
        "description": "Bairro",
        "type": "string"
      },
      "complement": {
        "description": "Complemento",
        "type": "string"
      },
      "zipcode": {
        "description": "Código postal",
        "type": "string",
        "mask": "#####-###"
      },
      "country": {
        "description": "País",
        "type": "string",
        "default": "Brasil"
      },
      "state_and_city": {
        "description": "Cidade",
        "type": "string"
      },
      "address_line": {
        "description": "Endereço completo",
        "type": "string"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "form": [
      "city",
      "state",
      "address",
      "number",
      "district",
      "complement",
      "zipcode"
    ],
    "formLayout": {
      "fields": {
        "city": {
          "span": 3
        },
        "state": {
          "span": 3
        },
        "number": {
          "span": 3
        },
        "district": {
          "span": 3
        },
        "complement": {
          "span": 3
        },
        "zipcode": {
          "span": 3
        }
      }
    }
  },
  "integration": {
    "$id": "integration",
    "required": [
      "name",
      "platform"
    ],
    "indexes": [
      "name"
    ],
    "properties": {
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "platform": {
        "description": "Plataforma",
        "enum": [
          "yampi",
          "monetizze",
          "braip",
          "perfectpay",
          "payt",
          "ticto"
        ]
      },
      "active": {
        "description": "Ativa",
        "type": "boolean",
        "default": false
      },
      "key": {
        "description": "Chave",
        "type": "string",
        "element": "textarea"
      },
      "key_alt": {
        "description": "Chave secundária",
        "type": "string",
        "element": "textarea"
      },
      "extra": {
        "description": "Campo adicional",
        "type": "string"
      },
      "plan_filter_type": {
        "description": "Tipo de filtro",
        "enum": [
          "blacklist",
          "whitelist"
        ]
      },
      "plan_filter": {
        "description": "Filtro de planos",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "formatted_name": {
        "description": "Nome",
        "readOnly": true
      },
      "postback_url": {
        "description": "URL de postback",
        "readOnly": true
      },
      "postback_secret": {
        "description": "Chave secreta do postback",
        "type": "string"
      },
      "total_plans_count": {
        "description": "Planos totais",
        "type": "number"
      },
      "last_sync_date": {
        "description": "Última sincronização",
        "type": "string",
        "format": "date-time"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "preferred": {
      "customer": {
        "form": [
          "name",
          "platform",
          "active",
          "key",
          "key_alt",
          "extra",
          "postback_secret",
          "postback_url"
        ]
      }
    },
    "icon": "link",
    "presets": [
      "crud",
      "view"
    ],
    "actions": {
      "activateAll": {
        "label": "Ativar",
        "ask": true,
        "selection": true
      },
      "deactivateAll": {
        "label": "Desativar",
        "ask": true,
        "selection": true
      },
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "synchronize": {
        "label": "Sincronizar produtos",
        "icon": "arrows-clockwise",
        "event": "synchronize",
        "function": null
      },
      "getSpan": {
        "label": "Busca retroativa",
        "icon": "magnifying-glass",
        "event": "getSpan"
      },
      "copyLink": {
        "label": "Copiar URL do postback",
        "icon": "copy",
        "requires": [
          "postback_url"
        ]
      },
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    },
    "table": [
      "name",
      "platform",
      "active",
      "total_plans_count",
      "last_sync_date"
    ],
    "filters": [
      "name",
      "platform",
      "active"
    ],
    "form": [
      "name",
      "platform",
      "active",
      "key",
      "key_alt",
      "extra",
      "postback_secret",
      "postback_url",
      "organization"
    ],
    "formLayout": {
      "fields": {
        "platform": {
          "component": {
            "name": "PlatformSelect"
          }
        },
        "key": {
          "if": {
            "operator": "in",
            "term1": "platform",
            "term2": [
              "braip",
              "monetizze",
              "perfectpay",
              "yampi",
              "ticto",
              "payt"
            ]
          }
        },
        "key_alt": {
          "if": {
            "operator": "in",
            "term1": "platform",
            "term2": [
              "yampi"
            ]
          }
        },
        "extra": {
          "if": {
            "operator": "in",
            "term1": "platform",
            "term2": [
              "yampi",
              "monetizze"
            ]
          }
        }
      }
    }
  },
  "macro": {
    "$id": "macro",
    "required": [],
    "freshItem": {},
    "owned": true,
    "properties": {
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "text": {
        "description": "Texto",
        "type": "string",
        "element": "textarea"
      },
      "audio": {
        "description": "Audio",
        "$ref": "file",
        "accept": [
          "audio/mpeg",
          "audio/mp4",
          "audio/ogg"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "image": {
        "description": "Imagem",
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "type": {
        "description": "Tipo",
        "element": "select",
        "enum": [
          "text",
          "audio",
          "image"
        ]
      },
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "user-circle",
    "presets": [
      "view"
    ],
    "table": [
      "name",
      "text",
      "audio",
      "image",
      "type"
    ],
    "formLayout": {
      "fields": {
        "text": {
          "if": {
            "operator": "equal",
            "term1": "type",
            "term2": "text"
          }
        },
        "audio": {
          "if": {
            "operator": "equal",
            "term1": "type",
            "term2": "audio"
          }
        },
        "image": {
          "if": {
            "operator": "equal",
            "term1": "type",
            "term2": "image"
          }
        }
      }
    },
    "individualActions": {
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  },
  "order": {
    "$id": "order",
    "required": [
      "customer",
      "products",
      "plans",
      "organization"
    ],
    "properties": {
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "description": "Criado em",
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "local_id": {
        "description": "ID local",
        "type": "string"
      },
      "token": {
        "description": "Token da transação",
        "type": "string",
        "readOnly": true
      },
      "status": {
        "enum": [
          "created",
          "authorized",
          "waiting_payment",
          "paid",
          "handling_products",
          "on_carriage",
          "delivered",
          "cancelled",
          "refused",
          "invoiced",
          "shipment_exception",
          "chargeback",
          "in_review"
        ],
        "translate": true
      },
      "integration": {
        "description": "Integração",
        "$ref": "integration",
        "populate": [
          "platform"
        ],
        "indexes": [
          "name"
        ]
      },
      "customer": {
        "$ref": "customer",
        "description": "Cliente",
        "indexes": [
          "name",
          "document",
          "email",
          "phone"
        ]
      },
      "products": {
        "type": "array",
        "description": "Produtos",
        "items": {
          "$ref": "product",
          "indexes": [
            "name"
          ]
        }
      },
      "plans": {
        "type": "array",
        "description": "Plano",
        "items": {
          "$ref": "productPlan",
          "indexes": [
            "name",
            "quantity"
          ]
        }
      },
      "quantity": {
        "description": "Quantidade",
        "type": "number"
      },
      "shipping_address": {
        "$ref": "geolocation",
        "description": "Endereço de entrega",
        "inline": true
      },
      "shipping_cost": {
        "description": "Custo de envio",
        "type": "number"
      },
      "saved_shipping_cost": {
        "description": "Economia do envio",
        "type": "number"
      },
      "tracking_code": {
        "description": "Rastreio",
        "type": "string"
      },
      "invoice": {
        "description": "Nota fiscal",
        "type": "string"
      },
      "amount": {
        "description": "Valor",
        "type": "number"
      },
      "effective_amount": {
        "description": "Valor efetivo",
        "type": "number"
      },
      "date_created": {
        "description": "Data da criação",
        "type": "string",
        "format": "date-time"
      },
      "date_updated": {
        "description": "Atualizado em",
        "type": "string",
        "format": "date-time"
      },
      "payment_type": {
        "description": "Tipo de pagamento",
        "type": "string"
      },
      "error": {
        "description": "Erro",
        "type": "string",
        "maxLength": 45
      },
      "events": {
        "description": "Eventos",
        "type": "array",
        "items": {
          "type": "object",
          "variable": true
        }
      },
      "assembled_orders": {
        "description": "Ordens conjugadas",
        "type": "array",
        "items": {
          "$ref": "order",
          "indexes": [
            "local_id"
          ]
        }
      },
      "previous_status": {
        "description": "Último status do pedido",
        "type": "string",
        "translate": true
      },
      "billet_link": {
        "description": "Link do boleto",
        "type": "string"
      },
      "billet_code": {
        "description": "Código do boleto",
        "type": "string"
      },
      "event": {
        "description": "Evento",
        "element": "select",
        "translate": true,
        "enum": [
          "order:paid",
          "order:canceled",
          "order:pix_created",
          "order:created",
          "order:billet_created",
          "order:billet_expiring",
          "cart:reminder",
          "transaction:payment_refused"
        ]
      },
      "pending": {
        "description": "Pendente?",
        "type": "boolean",
        "default": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "t-shirt",
    "table": [
      "local_id",
      "customer",
      "products",
      "status",
      "date_updated"
    ],
    "tableMeta": [
      "token",
      "integration"
    ],
    "form": [
      "local_id",
      "token",
      "status",
      "tracking_code",
      "shipping_address"
    ],
    "filters": [
      "local_id",
      "token",
      "status",
      "integration",
      "date_created",
      "date_updated",
      "products",
      "integration",
      "tracking_code",
      "customer"
    ],
    "actions": {
      "executeAll": {
        "label": "Criar tarefas",
        "selection": true,
        "button": true
      }
    },
    "options": {
      "queryPreset": {
        "filters": {
          "pending": {
            "$ne": false
          }
        }
      }
    },
    "search": {
      "placeholder": "Pesquise aqui por id local, token, ou nome do cliente",
      "indexes": [
        "local_id",
        "token"
      ]
    },
    "formLayout": {
      "fields": {
        "local_id": {
          "span": 3
        },
        "token": {
          "span": 3
        },
        "status": {
          "span": 3
        },
        "integration": {
          "span": 3
        },
        "tracking_code": {
          "span": 3
        }
      }
    }
  },
  "orderEvent": {
    "$id": "orderEvent",
    "properties": {
      "type": {
        "description": "Tipo",
        "type": "string"
      },
      "when": {
        "description": "Data",
        "type": "string",
        "format": "date"
      },
      "detail": {
        "description": "Detalhe",
        "type": "string"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "organization": {
    "$id": "organization",
    "indexes": [
      "name",
      "members"
    ],
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "owner": {
        "$ref": "user",
        "indexes": [
          "name",
          "email"
        ]
      },
      "members": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "roles": {
              "type": "array",
              "translate": true,
              "items": {
                "enum": [
                  "manager",
                  "attendant"
                ]
              }
            },
            "status": {
              "translate": true,
              "enum": [
                "active",
                "inactive"
              ]
            },
            "user": {
              "$ref": "user",
              "indexes": [
                "name",
                "email"
              ]
            }
          }
        }
      },
      "subscriptions": {
        "description": "Assinaturas",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "subscription_code": {
              "description": "Código da assinatura",
              "type": "string"
            },
            "periodicity": {
              "description": "Periodicidade",
              "element": "select",
              "translate": true,
              "enum": [
                "weekly",
                "monthly",
                "bimonthly",
                "quarterly",
                "semiannually",
                "annually"
              ]
            },
            "plan": {
              "description": "Plano",
              "element": "select",
              "translate": true,
              "enum": [
                "basic"
              ],
              "default": "basic"
            },
            "start_date_recurrent": {
              "description": "Data de criação da assinatura",
              "type": "string",
              "format": "date"
            },
            "subscription_status": {
              "description": "Status da Assinatura",
              "element": "select",
              "translate": true,
              "enum": [
                "active",
                "defaulter",
                "canceled",
                "waiting_payment",
                "trial_period"
              ]
            },
            "subscription_amount": {
              "description": "Valor da Assinatura",
              "type": "number"
            },
            "payment_type": {
              "description": "Tipo de Pagamento",
              "element": "select",
              "translate": true,
              "enum": [
                "credit_card",
                "debit",
                "billet",
                "free_sale",
                "pix",
                "other"
              ]
            }
          }
        }
      },
      "external_message": {
        "description": "Mensagem externa",
        "$ref": "funnel",
        "indexes": [
          "index_indentifier"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "buildings",
    "presets": [
      "crud"
    ],
    "table": [
      "name"
    ],
    "tableMeta": [
      "subscriptions"
    ],
    "individualActions": {
      "showSubscriptions": {
        "icon": "currency-circle-dollar",
        "label": "Assinaturas",
        "requires": [
          "subscriptions"
        ]
      },
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    },
    "tableLayout": {
      "actions": {}
    },
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    }
  },
  "product": {
    "$id": "product",
    "indexes": [
      "name"
    ],
    "required": [],
    "properties": {
      "integration": {
        "$ref": "integration",
        "indexes": [
          "name"
        ]
      },
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "code": {
        "description": "Código",
        "type": "string"
      },
      "stock": {
        "description": "Quantidade em estoque",
        "type": "number"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "cube",
    "options": {
      "queryPreset": {
        "sort": {
          "name": 1
        }
      }
    },
    "presets": [
      "crud"
    ],
    "table": [
      "name",
      "code"
    ],
    "tableMeta": [
      "integration"
    ],
    "filters": [
      "name",
      "code"
    ],
    "actions": {
      "ui/spawnAdd": null,
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "ui/spawnView": null,
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    },
    "form": []
  },
  "productPlan": {
    "$id": "productPlan",
    "required": [
      "name",
      "code",
      "quantity",
      "price"
    ],
    "properties": {
      "integrations": {
        "description": "Integrações",
        "type": "array",
        "items": {
          "$ref": "integration",
          "indexes": [
            "name"
          ]
        }
      },
      "product": {
        "description": "Produto",
        "$ref": "product",
        "indexes": [
          "name"
        ]
      },
      "code": {
        "description": "Código",
        "type": "string"
      },
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "quantity": {
        "description": "Quantidade",
        "type": "number"
      },
      "name_and_quantity": {
        "description": "Nome e quantidade",
        "readOnly": true
      },
      "price": {
        "description": "Preço",
        "type": "number"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "flask",
    "presets": [
      "view"
    ],
    "individualActions": {
      "spawnEdit": {
        "label": "Editar",
        "icon": "pencil-simple",
        "event": "spawnEdit"
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    },
    "table": [
      "product",
      "integrations",
      "name",
      "code",
      "quantity"
    ],
    "filters": [
      "product",
      "integrations",
      "code",
      "name"
    ]
  },
  "task": {
    "$id": "task",
    "required": [
      "type",
      "funnel",
      "attendants",
      "organization"
    ],
    "properties": {
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "type": {
        "description": "Tipo de tarefa",
        "enum": [
          "postback",
          "broadcast"
        ]
      },
      "owner": {
        "description": "Criado por",
        "$ref": "user",
        "indexes": [
          "email",
          "name"
        ]
      },
      "funnel": {
        "description": "Funil",
        "$ref": "funnel",
        "indexes": [
          "event",
          "messages"
        ]
      },
      "executions": {
        "description": "Execuções",
        "type": "array",
        "items": {
          "$ref": "funnelExecution",
          "indexes": [
            "funnel",
            "attendant",
            "customer_name",
            "customer_phone",
            "variables",
            "failure_reason",
            "status",
            "steps",
            "customer",
            "tags"
          ]
        }
      },
      "attendants": {
        "description": "Atendentes",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "user_id": {
              "type": "string"
            },
            "status": {
              "type": "string",
              "enum": [
                "pending",
                "running",
                "paused",
                "complete"
              ]
            }
          }
        }
      },
      "broadcast": {
        "description": "Broadcast",
        "$ref": "broadcast",
        "indexes": [
          "name"
        ]
      },
      "files": {
        "description": "Arquivos CSV",
        "type": "array",
        "items": {
          "$ref": "file",
          "accept": [
            "text/csv"
          ],
          "indexes": [
            "name",
            "link",
            "type"
          ]
        }
      },
      "event": {
        "description": "Nome",
        "type": "string"
      },
      "order": {
        "description": "Pedido",
        "$ref": "order",
        "indexes": [
          "customer",
          "products"
        ],
        "populate": [
          "integration"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "user-circle",
    "presets": [
      "view"
    ],
    "options": {
      "queryPreset": {
        "sort": {
          "created_at": -1
        }
      }
    },
    "table": [
      "owner",
      "event",
      "attendants",
      "broadcast",
      "funnel",
      "order",
      "type",
      "executions"
    ],
    "search": {
      "placeholder": "Pesquise aqui pelo nome da tarefa, nome do cliente, ou ID da compra",
      "indexes": [
        "owner"
      ]
    },
    "individualActions": {
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  },
  "user": {
    "$id": "user",
    "icon": "users",
    "required": [
      "name",
      "roles",
      "email"
    ],
    "form": [
      "name",
      "active",
      "roles",
      "email",
      "phone_number",
      "picture_file",
      "automatic_tasks",
      "current_organization"
    ],
    "indexes": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "given_name": {
        "readOnly": true
      },
      "family_name": {
        "readOnly": true
      },
      "active": {
        "type": "boolean"
      },
      "roles": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
            "customer",
            "guest"
          ]
        },
        "uniqueItems": true
      },
      "email": {
        "type": "string",
        "inputType": "email",
        "unique": true
      },
      "password": {
        "type": "string",
        "inputType": "password",
        "hidden": true
      },
      "phone_number": {
        "type": "string",
        "mask": "(##) #####-####"
      },
      "picture_file": {
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "picture": {
        "readOnly": true
      },
      "group": {
        "type": "string"
      },
      "self_registered": {
        "type": "boolean",
        "readOnly": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "automatic_tasks": {
        "description": "Tarefas automaticas",
        "type": "boolean",
        "default": false
      },
      "current_organization": {
        "description": "Organização atual",
        "$ref": "organization",
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud",
      "duplicate"
    ],
    "layout": {
      "name": "grid",
      "options": {
        "title": "name",
        "badge": "roles",
        "picture": "picture_file",
        "information": "email",
        "active": "active"
      }
    },
    "individualActions": {
      "changePassword": {
        "label": "change_password",
        "icon": "key",
        "translate": true,
        "route": {
          "name": "/dashboard/user/changepass",
          "fetchItem": true
        }
      },
      "copyActivationLink": {
        "label": "copy_activation_link",
        "icon": "link",
        "translate": true
      },
      "loginAs": {
        "label": "Entrar como usuário",
        "icon": "user-switch",
        "event": "loginAs"
      },
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      },
      "duplicate": {
        "label": "action.duplicate",
        "event": "duplicate",
        "icon": "copy",
        "translate": true
      }
    },
    "filters": [
      "name",
      "roles",
      "email",
      "phone_number"
    ],
    "table": [
      "name",
      "roles",
      "picture_file",
      "active",
      "updated_at"
    ],
    "tableMeta": [
      "email"
    ],
    "formLayout": {
      "fields": {
        "given_name": {
          "span": 3
        },
        "family_name": {
          "span": 3
        }
      }
    },
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    }
  },
  "campaign": {
    "$id": "campaign",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "description": "Nome",
        "type": "string"
      },
      "tasks": {
        "description": "Tarefas",
        "type": "array",
        "items": {
          "$ref": "task",
          "indexes": [
            "funnel"
          ]
        }
      },
      "csv": {
        "description": "Arquivos CSV",
        "type": "array",
        "items": {
          "accept": [
            "text/csv"
          ],
          "$ref": "file",
          "populate": [
            "absolute_path",
            "relative_path"
          ],
          "indexes": [
            "name",
            "link",
            "type"
          ]
        }
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "share",
    "presets": [
      "view",
      "crud"
    ],
    "table": [
      "name"
    ],
    "form": [
      "name",
      "csv"
    ],
    "filters": [
      "name"
    ],
    "individualActions": {
      "viewExecutions": {
        "label": "Execuções",
        "icon": "eye"
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    },
    "search": {
      "placeholder": "Pesquise aqui pelo nome do campanha",
      "indexes": [
        "name"
      ]
    },
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    }
  },
  "lastmessage": {
    "$id": "lastmessage",
    "required": [
      "instance_id",
      "phone",
      "content",
      "timestemp"
    ],
    "properties": {
      "instance_id": {
        "description": "Usuário",
        "$ref": "user",
        "indexes": [
          "name"
        ]
      },
      "phone": {
        "description": "Nome",
        "type": "string"
      },
      "me": {
        "description": "Enviada por mim",
        "type": "boolean"
      },
      "content": {
        "description": "Tarefas",
        "type": "string"
      },
      "timestemp": {
        "description": "Timestemp",
        "type": "string"
      },
      "organization": {
        "$ref": "organization",
        "noForm": true,
        "indexes": [
          "name",
          "members"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "magnifying-glass",
    "presets": [
      "view"
    ],
    "individualActions": {
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      }
    }
  }
}


declare type MirrorRouter = {
  "/file/get": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/file/insert": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/file/download": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ]
    }
  },
  "/file/remove": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/file/removeAll": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/log/get": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/log/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/log/insert": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/broadcast/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/broadcast/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/broadcast/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/broadcast/upload": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/broadcast/removeFile": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/broadcast/createTask": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/conversationTag/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/conversationTag/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/conversationTag/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/conversationTag/remove": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/customer/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/customer/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/customer/getOrders": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnel/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnel/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnel/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnel/copy": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnel/updateOrCreate": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated"
      ]
    }
  },
  "/funnel/getOrCreate": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated"
      ]
    }
  },
  "/funnelExecution/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelExecution/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelExecution/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelExecution/getChats": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnelExecution/downloadContacts": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnelExecution/finishChat": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnelExecution/reactiveChat": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnelExecution/chatIsFinished": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/funnelMessage/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelMessage/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelMessage/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelMessage/upload": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/funnelMessage/removeFile": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/integration/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/integration/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/integration/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/integration/remove": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/integration/getProducts": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/integration/insertProducts": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/integration/synchronize": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/macro/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/macro/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/macro/upload": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/macro/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/macro/removeFile": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/macro/getWppMessages": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/macro/getChatInfo": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/order/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/order/getSpan": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/order/createTasks": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/order/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/organization/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/organization/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/organization/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/organization/getMyOrganizations": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/organization/updateMember": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/organization/addNewMember": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/organization/removeMember": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/organization/generateLoginLink": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/organization/getExternalMessageFunnel": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/product/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/product/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/product/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/productPlan/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/productPlan/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/productPlan/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/task/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/task/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/task/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/task/getTaskFromAttendants": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/task/executeFailures": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/task/getExecutions": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/task/executePause": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/task/executeTask": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/task/pauseTask": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/user/get": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/user/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/upload": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/user/removeFile": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "builtin": true
    }
  },
  "/user/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/user/authenticate": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ]
    }
  },
  "/user/activate": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "guest"
      ]
    }
  },
  "/user/createAccount": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/user/getInfo": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "guest"
      ]
    }
  },
  "/user/getCurrentUser": {
    "POST": {
      "roles": [
        "root",
        "customer",
        "unauthenticated",
        "guest"
      ],
      "response": {
        "$ref": "user"
      }
    }
  },
  "/user/getActivationLink": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/wppLogout": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/user/wppContact": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/user/loginAs": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/campaign/insert": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/get": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/getAll": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/upload": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/remove": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/removeFile": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ],
      "builtin": true
    }
  },
  "/campaign/getTasks": {
    "POST": {
      "roles": [
        "root",
        "customer"
      ]
    }
  },
  "/lastmessage/insert": {
    "POST": {
      "roles": [
        "customer",
        "root"
      ],
      "builtin": true
    }
  }
}


declare global {
  type Collections = {
    [K in keyof MirrorDescriptions]: {
      item: SchemaWithId<MirrorDescriptions[K]>
    }
  }
}

declare module 'aeria-sdk' {
  import { TopLevelObject } from 'aeria-sdk'

  type UnionToIntersection<T> = (T extends any ? ((x: T) => 0) : never) extends ((x: infer R) => 0)
    ? R
    : never

  type InferEndpoint<Route extends keyof MirrorRouter> = {
    [Method in keyof MirrorRouter[Route]]: Method extends RequestMethod
      ? MirrorRouter[Route][Method] extends infer Contract
        ? Contract extends
        | { response: infer RouteResponse }
        | { payload: infer RoutePayload  }
        | { query: infer RoutePayload  }
          ? MakeEndpoint<
            Route,
            Method,
            InferResponse<RouteResponse>,
            RoutePayload extends {}
              ? InferProperty<RoutePayload>
              : undefined
          >
          : MakeEndpoint<Route, Method>
        : never
      : never
    } extends infer Methods
      ? Methods[keyof Methods]
      : never

  type Endpoints = {
    [Route in keyof MirrorRouter]: Route extends `/${infer Coll}/${infer Fn}`
      ? Coll extends keyof Collections
        ? Fn extends keyof CollectionFunctionsSDK<any>
          ? Record<Coll, Record<
              Fn, {
              POST: CollectionFunctionsSDK<SchemaWithId<MirrorDescriptions[Coll]>>[Fn]
            }
            >>
          : InferEndpoint<Route>
        : InferEndpoint<Route>
      : InferEndpoint<Route>
  } extends infer Endpoints
    ? UnionToIntersection<Endpoints[keyof Endpoints]>
    : never

  type TopLevelAeria = 
    & ((bearerToken?: string) => TopLevelObject & Endpoints)
    & TopLevelObject & Endpoints

  const topLevelAeria: TopLevelAeria

  export const url: string
  export const aeria: TopLevelAeria
  export default topLevelAeria
}

