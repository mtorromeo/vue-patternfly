declare type Htmlparsestringify = {
  parse_tag(tag: string): AstElement;
  parse(html: string, options?: ParseOptions): AstElement[];
  stringify(doc: AstElement[]): string;
}

declare type AstElement = {
  type: string;
  content?: string;
  voidElement: boolean;
  name: string;
  attrs: Record<string, unknown>;
  children: AstElement[];
}

declare type ParseOptions = {
  components: Record<string, any>;
}

declare module "html-parse-stringify" {
  export default null as Htmlparsestringify;
}

declare module '@toycode/markdown-it-class';
