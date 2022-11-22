import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { SseService } from './sse.service';
import { Observable } from 'rxjs/internal/Observable';
import { interval, map } from 'rxjs';

@Controller()
export class SseController {
  constructor(private readonly sseService: SseService) {}

  // Sse
  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
