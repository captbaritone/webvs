import Component, { IContainer } from "../Component";
import IMain from "../IMain";
import { BlendMode, WebGLVarType } from "../utils";
import RenderingContext from "../webgl/RenderingContext";
import ShaderProgram from "../webgl/ShaderProgram";

export interface IMosaicOpts {
    blendMode: string;
    squareSize: number;
    onBeatSizeChange: boolean;
    onBeatSquareSize: number;
    onBeatSizeDuration: number;
}

export default class Mosaic extends Component {
    public static componentName = "Mosaic";
    public static componentTag = "trans";
    protected static defaultOptions: IMosaicOpts = {
        blendMode: "REPLACE",
        onBeatSizeChange: false,
        onBeatSizeDuration: 10,
        onBeatSquareSize: 1,
        squareSize: 0.5,
    };
    protected static optUpdateHandlers = {
        blendMode: "updateProgram",
    };

    protected opts: IMosaicOpts;
    private frameCount: number;
    private size: number;
    private program: ShaderProgram;

    constructor(main: IMain, parent: IContainer, opts: any) {
        super(main, parent, opts);
    }

    public init() {
        this.frameCount = 0;
        this.size = this.opts.squareSize;
        this.updateProgram();
    }

    public draw() {
        const gl = this.main.getRctx().getGl();
        if (this.opts.onBeatSizeChange && this.main.getAnalyser().isBeat()) {
            this.size = this.opts.onBeatSquareSize;
            this.frameCount = this.opts.onBeatSizeDuration;
        }

        if (this.size !== 0) {
            const sizeX = 1 / Math.floor(this.size * (gl.drawingBufferWidth - 1) + 1);
            const sizeY = 1 / Math.floor(this.size * (gl.drawingBufferHeight - 1) + 1);
            this.program.run(this.parent.getTSM(), { size: [sizeX, sizeY] });
        }

        if (this.frameCount > 0) {
            this.frameCount--;
            if (this.frameCount === 0) {
                this.size = this.opts.squareSize;
            } else {
                const incr = Math.abs(this.opts.squareSize - this.opts.onBeatSquareSize) /
                           this.opts.onBeatSizeDuration;
                this.size += incr * (this.opts.onBeatSquareSize > this.opts.squareSize ? -1 : 1);
            }
        }
    }

    public destroy() {
        super.destroy();
        this.program.destroy();
    }

    private updateProgram() {
        const blendMode: BlendMode = BlendMode[this.opts.blendMode];
        const program = new ShaderProgram(this.main.getRctx(), {
            bindings: {
                uniforms: {
                    size: { name: "u_size", valueType: WebGLVarType._2FV },
                },
            },
            blendMode,
            fragmentShader: `
                uniform vec2 u_size;
                void main() {
                    vec2 samplePos = u_size * ( floor(v_position/u_size) + vec2(0.5,0.5) );
                    setFragColor(getSrcColorAtPos(samplePos));
                }
            `,
            swapFrame: true,
        });
        if (this.program) {
            this.program.destroy();
        }
        this.program = program;
    }
}
