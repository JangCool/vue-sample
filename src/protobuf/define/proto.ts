import { load, Type } from "protobufjs"; // respectively "./node_modules/protobufjs"

export interface ProtoBuf {
    AwesomeMessage:Type,
    Command:Type
}

const defineProto:ProtoBuf = {
    AwesomeMessage: null,
    Command: null
};

export {
    defineProto
};

export function portobufInit() {
    Command();
};

async function Command(){

    const { root } = await load("/src/protobuf/proto/command.proto");

    const Command = root.lookupType("protobuf.proto.Command");
    
    defineProto.Command = Command;

};